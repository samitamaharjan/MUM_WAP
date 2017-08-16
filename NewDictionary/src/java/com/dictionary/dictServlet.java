/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dictionary;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 *
 * @author Samita
 */
public class dictServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        
        String term = request.getParameter("term"); 
        JSONObject jsonObj = new JSONObject();
        
        try {
            Connection con = DbConnection.openConnection();
            PreparedStatement stmt = con.prepareStatement("SELECT word, wordtype, definition FROM entries WHERE word like ? ORDER BY word");
            stmt.setString(1, term);
            ResultSet rs = stmt.executeQuery();
            JSONArray arr = new JSONArray();
            
            while(rs.next()){
                JSONObject obj = new JSONObject();
                obj.put("word", rs.getString("word"));
                obj.put("wordType", rs.getString("wordType"));
                obj.put("definition", rs.getString("definition"));
                
                arr.add(obj);
            }
        
            jsonObj.put("output",arr);
        } catch (SQLException e) {
            jsonObj.put("error", e.toString());
        }
        out.print(jsonObj);
    }
}