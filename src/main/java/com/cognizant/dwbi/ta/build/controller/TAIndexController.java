package com.cognizant.dwbi.ta.build.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TAIndexController {

    @RequestMapping("/toolanalyzer")
    public String getIndexPage(){
        return "Index";
    }

}
