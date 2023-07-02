package com.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dto.Question;
import com.dto.ContentDto;
import com.serviceImpl.AuthenticationServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/content")
@CrossOrigin(origins = "http://localhost:3000" , allowedHeaders = "*", allowCredentials = "true")
public class ContentController {
	
	
	@GetMapping("/")
	public ContentDto getContent(@RequestHeader("Authorization") String token)
	{
		List<Question> allQues=new ArrayList<>();
		
		Question ques1 = new Question();
		ques1.setQuestion("What is 2+2?");
		ques1.setAns("4");
		ques1.setOptions(Arrays.asList("2","4","8","0"));
		
		allQues.add(ques1);
		
		Question ques2 = new Question();
		ques2.setQuestion("What is 42+42?");
		ques2.setAns("84");
		ques2.setOptions(Arrays.asList("72","84","88","80"));
		
		allQues.add(ques2);
		
		Question ques3 = new Question();
		ques3.setQuestion("What is 555+555?");
		ques3.setAns("1110");
		ques3.setOptions(Arrays.asList("1110","1184","1000","1010"));
		
		allQues.add(ques3);
		
		
		
		ContentDto content = new ContentDto();
		content.setVideoLink("https://www.youtube.com/embed/Wm0zq-NqEFs");
		content.setQuestions(allQues);
		
		return content;
		
		
		
	}

}
