package com.stanley.commentsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private long Id;
private String commenterName;
private String comment;

public Comment(){
}

public long getId() {
	return Id;
}

public void setId(long Id) {
	this.Id = Id;
}

public String getCommenterName() {
	return commenterName;
}

public void setCommenterName(String commenterName) {
	this.commenterName = commenterName;
}

public String getComment() {
	return comment;
}

public void setComment(String comment) {
	this.comment = comment;
}

}
