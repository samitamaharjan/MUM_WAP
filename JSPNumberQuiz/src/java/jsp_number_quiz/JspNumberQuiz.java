/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jsp_number_quiz;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Samita
 */
public class JspNumberQuiz extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String txtAnswer = request.getParameter("txtAnswer");
        String btnNext = request.getParameter("btnNext");
        String btnStart = request.getParameter("btnStart");
        
        Quiz quiz;
        HttpSession session = request.getSession();
        if (session.getAttribute("quiz") == null) {
            quiz = new Quiz();
            request.getSession().setAttribute("quiz", quiz);
        } else {
            quiz = (Quiz) session.getAttribute("quiz");
            int seq = quiz.getSequence();
            if (seq >= 5) {
                RequestDispatcher dispatcher = request.getRequestDispatcher("completed.jsp");
                dispatcher.forward(request, response);
            }
            quiz.setSequence(seq + 1);
            session.setAttribute("quiz", quiz);
        }
        
        
        RequestDispatcher dispatcher = request.getRequestDispatcher("quiz.jsp");
        dispatcher.forward(request, response);
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
}
