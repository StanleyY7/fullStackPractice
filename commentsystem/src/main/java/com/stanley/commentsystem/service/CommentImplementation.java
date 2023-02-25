package com.stanley.commentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stanley.commentsystem.model.Comment;
import com.stanley.commentsystem.respository.CommentRepository;

@Service
public class CommentImplementation implements CommentService {
	
	@Autowired
	private CommentRepository commentRepository;

	@Override
	public Comment saveComment(Comment comment) {
		return commentRepository.save(comment);
	}

	@Override
	public List<Comment> getAllComments() {
		// TODO Auto-generated method stub
		return commentRepository.findAll();
	}


}
