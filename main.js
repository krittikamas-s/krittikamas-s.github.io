class QuizManager {
    constructor() {
        this.allQuestions = [];
        if(typeof part1Questions !== 'undefined') this.allQuestions.push(...part1Questions);
        if(typeof part2Questions !== 'undefined') this.allQuestions.push(...part2Questions);
        if(typeof part3Questions !== 'undefined') this.allQuestions.push(...part3Questions);
        if(typeof part4Questions !== 'undefined') this.allQuestions.push(...part4Questions);
        if(typeof part5Questions !== 'undefined') this.allQuestions.push(...part5Questions);
        if(typeof part6Questions !== 'undefined') this.allQuestions.push(...part6Questions);
        if(typeof part7Questions !== 'undefined') this.allQuestions.push(...part7Questions);
        if(typeof part8Questions !== 'undefined') this.allQuestions.push(...part8Questions);
        if(typeof part9Questions !== 'undefined') this.allQuestions.push(...part9Questions);

        this.prepareQuestions();

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.history = {}; 
    }

    // Helper function for Fisher-Yates Shuffle
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    prepareQuestions() {
        // Optional: Shuffle the order of the questions themselves
        // this.shuffleArray(this.allQuestions);

        this.allQuestions.forEach(q => {
            // 1. Shuffle standard Multiple Choice and Multiple Select options
            if (q.options && Array.isArray(q.options) && q.type !== 'matching') {
                this.shuffleArray(q.options);
            }

            // 2. Shuffle Matching question components
            if (q.type === 'matching') {
                // Shuffle the rows (the items on the left)
                if (q.rows) this.shuffleArray(q.rows);
                // Shuffle the options (the items in the dropdowns)
                if (q.options) this.shuffleArray(q.options);
            }
        });
    }
    
    getCurrentQuestion() {
        return this.allQuestions[this.currentQuestionIndex];
    }

    isCurrentQuestionAnswered() {
        return this.history[this.currentQuestionIndex] !== undefined;
    }

    isQuestionAnswered(index) {
        return this.history[index] !== undefined;
    }

    getSavedResult() {
        return this.history[this.currentQuestionIndex];
    }

    submitAnswer(userAnswer) {
        if (this.isCurrentQuestionAnswered()) return this.getSavedResult();

        const currentQ = this.getCurrentQuestion();
        let isCorrect = false;

        // --- Logic for different question types ---
        if (currentQ.type === 'short-answer') {
            const userNorm = userAnswer.trim().toLowerCase();
            if (Array.isArray(currentQ.correctAnswer)) {
                const allowed = currentQ.correctAnswer.map(ans => String(ans).toLowerCase());
                if (allowed.includes(userNorm)) isCorrect = true;
            } else {
                if (userNorm === String(currentQ.correctAnswer).toLowerCase()) isCorrect = true;
            }
        } 
        else if (currentQ.type === 'matching') {
            let allMatchesCorrect = true;
            currentQ.rows.forEach(row => {
                const userSelection = userAnswer.find(u => u.id === row.id)?.value;
                if (userSelection !== row.correct) allMatchesCorrect = false;
            });
            isCorrect = allMatchesCorrect;
        }
        else if (currentQ.type === 'multiple-select') {
            if (userAnswer.length === currentQ.correctAnswer.length) {
                const sortedUser = [...userAnswer].sort();
                const sortedCorrect = [...currentQ.correctAnswer].sort();
                if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) isCorrect = true;
            }
        }
        else {
            if (userAnswer === currentQ.correctAnswer) isCorrect = true;
        }

        if (isCorrect) this.score++;

        const resultObject = {
            isCorrect: isCorrect,
            userAnswer: userAnswer,
            correctAnswer: currentQ.correctAnswer,
            explanation: currentQ.explanation,
            chapters: currentQ.chapter // Store chapters to calculate stats later
        };

        this.history[this.currentQuestionIndex] = resultObject;
        return resultObject;
    }

    // --- NEW: Calculate stats per chapter ---
    getChapterStats() {
        const stats = {};
        
        this.allQuestions.forEach((q, index) => {
            q.chapter.forEach(chap => {
                if (!stats[chap]) {
                    stats[chap] = { total: 0, correct: 0 };
                }
                stats[chap].total++;
                
                // If question was answered and was correct
                if (this.history[index] && this.history[index].isCorrect) {
                    stats[chap].correct++;
                }
            });
        });
        return stats;
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.allQuestions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            return true;
        }
        return false;
    }

    jumpToQuestion(index) {
        if (index >= 0 && index < this.allQuestions.length) {
            this.currentQuestionIndex = index;
            return true;
        }
        return false;
    }

    getResults() {
        return {
            score: this.score,
            total: this.allQuestions.length,
            percentage: ((this.score / this.allQuestions.length) * 100).toFixed(0)
        };
    }
}