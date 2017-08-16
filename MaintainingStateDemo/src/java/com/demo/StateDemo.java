/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Samita
 */
public class StateDemo extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse
response) throws ServletException, IOException {
    request.setAttribute("requestState", "bob");
    request.getSession().setAttribute("sessionState", "bob");
    this.getServletContext().setAttribute("applicationState", "bob");
        Cookie c = new Cookie("cookiePermanentState", "bob");
        c.setMaxAge(3600);
        response.addCookie(c);

        c = new Cookie("cookieTemporaryState", "bob");
        response.addCookie(c);
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<form method='post'>");
        out.print("<p>Please click the button</p>");
        out.print("<input type='hidden' name='hiddenState' value='bob'>");
        out.print("<input type='submit' value='Click me'/>");
        out.print("</form>");
        out.print("</body></html>");

        }

        protected void doPost(HttpServletRequest request, HttpServletResponse
       response)
        throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.print("<html><head><title>Test</title></head><body><p>See the Command window</p></body></html>");

        System.out.format("requestState: %s\r\n", request.getAttribute("requestState"));
        System.out.format("sessionState: %s\r\n", request.getSession().getAttribute("sessionState"));
        System.out.format("applicationState: %s\r\n", this.getServletContext().getAttribute("applicationState"));

        Cookie[] cookies = request.getCookies();
        int cnt = 0;
        if (cookies != null){
            for (Cookie cookie : cookies){
                if (cookie.getName().equals("cookiePermanentState"))
                    System.out.format("cookiePermanentState: %s\r\n", cookie.getValue());
                else if (cookie.getName().equals("cookieTemporaryState")) {
                    System.out.format("cookieTemporaryState: %s\r\n", cookie.getValue());
                }
            }
        }
        System.out.format("hiddenState: %s\r\n",
       request.getParameter("hiddenState"));
    }
}
