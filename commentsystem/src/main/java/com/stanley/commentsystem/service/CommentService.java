package com.stanley.commentsystem.service;

import java.util.List;

import com.stanley.commentsystem.model.Comment;

public interface CommentService {
public Comment saveComment(Comment comment);
public List<Comment> getAllComments();
}
