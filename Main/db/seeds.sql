INSERT INTO department (name)
VALUES ("Accounting"),
       ("Sales"),
       ("Engineering"),
       ("Human Resources"),
       ("Recruiting"),
       ("Support");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 120000, 2),
       ("Accountant", 80000, 1),
       ("Salesperson", 52000, 3),
       ("Engineer", 145000, 2),
       ("Analyst", 67000, 5),
       ("Recruiter", 82000, 4),
       ("Secretary", 65000, 6);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Diego", "Consuela", 3, NULL),
        ("Gregory", "Dwyer", 7, 1),
        ("Susan", "Tahirkeli", 5, 1),
        ("Wen", "Chiang", 4, 1),
        ("Barbara", "Seko", 5, 1),
        ("Kim", "Stablowski", 7, 1),
        ("Junior", "Trask", 3, 1),
        ("Stacy", "Botz", 3, 1),
        ("Melody", "Smith", 7, 1);
        