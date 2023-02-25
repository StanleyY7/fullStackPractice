package com.stanley.commentsystem.respository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stanley.commentsystem.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer>{

}
