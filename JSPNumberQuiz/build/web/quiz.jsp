<%-- 
    Document   : quiz
    Created on : Aug 2, 2017, 7:38:12 AM
    Author     : Samita
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Number Quiz</title>
    </head>
    <body>
        <form name='myform' method='post'>
                <h2>Have fun with NumberQuiz!</h2>
                <p>Your current score is 0.</p>
                <p>Attempt 0 / 3 </p>
                <p>Guess the next number in the sequence!</p>
                <p>[${quiz.questions}, <font style='color:red'><b> ? </b></font>]</p>
                <p>Your answer:<input type='text' name='txtAnswer' value='' /></p>
                <p>
                    <input type='submit' name='btnNext' value='Next'/>
                    <input type='submit' name='btnStart' value='Restart!'/>
                </p>
                <p><input type='button' name='btnHint' value='Hint?'/></p>
        </form>
    </body>

</html>
