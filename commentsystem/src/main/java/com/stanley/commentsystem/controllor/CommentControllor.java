package com.stanley.commentsystem.controllor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stanley.commentsystem.model.Comment;
import com.stanley.commentsystem.service.CommentService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/comment")
@CrossOrigin
public class CommentControllor {
	
	@Autowired
	private CommentService commentService;
	
	@PostMapping("/add")
	public ResponseEntity<String> add(@RequestBody Comment comment, HttpServletResponse response) {
	    commentService.saveComment(comment);
	    response.setStatus(HttpStatus.CREATED.value());
	    return ResponseEntity.ok("New comment added");
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<Comment>> getAllComments(HttpServletResponse response){
	    List<Comment> comments = commentService.getAllComments();
	    if (comments.isEmpty()) {
	        response.setStatus(HttpStatus.NO_CONTENT.value());
	    }
	    return ResponseEntity.ok(comments);
	}
	
}
