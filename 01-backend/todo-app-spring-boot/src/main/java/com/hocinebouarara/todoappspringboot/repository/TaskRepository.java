package com.hocinebouarara.todoappspringboot.repository;

import com.hocinebouarara.todoappspringboot.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Long> {
}
