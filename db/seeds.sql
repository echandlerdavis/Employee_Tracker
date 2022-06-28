INSERT INTO department(department_name)
VALUES ("Engineering"),
        ("Administration"),
        ("Customer Service");



INSERT INTO role(title, salary, department_id)
VALUES ("Engineer", 80000, 1),
("Intern", 0, 2),
("Representative", 50000, 3),
("Manager", 100000, 2);


INSERT INTO employee(first_name, last_name, role_id, manager_id) 
VALUES
 ("Mary", "Whositwhatsit", 3, 5),
 ("Lydia", "Davis", 4, 2),
 ("Chandler", "Felty", 1, 1),
 ("Rick", "Nissan", 2, 1),
 ("Tony", "The-Tiger", 3, 2),
 ("Captain", "MyCaptain", 4, 1);