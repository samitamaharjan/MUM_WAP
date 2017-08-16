/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsp_number_quiz;
/**
 *
 * @author Samita
 */
public class Quiz {
        private static String[] questions = {
            "3, 1, 4, 1, 5",
            "1, 1, 2, 3, 5",
            "1, 4, 9, 16, 25",
            "2, 3, 5, 7, 11",
            "1, 2, 4, 8, 16"
        };
        private static int[] answers = {9, 8, 36, 13, 32};
        private int sequence = 0;
        private int score = 0;
        
        public String getQuestions() {
            return questions[sequence];
        }
        
        public void setSequence(int sequence) {
            this.sequence = sequence;
        }
        
        public int getSequence() {
            return sequence;
        }
        
        public int getScore() {
            return score;
        }
        
        public void correctAnswer(int answer) {
            if (answers[this.sequence] == answer) {
                this.score = score + 1;
            }
        }
}