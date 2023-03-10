INSERT INTO department (name)
VALUES ("Accounting"),
       ("Sales"),
       ("Engineering"),
       ("Human Resources"),
       ("Recruiting"),
       ("Support");

INSERT INTO role (title, salary, department_id)
VALUES (Manager, 120000, 2),
       (Accountant, 80000, 1),
       (Salesperson, 52000, 3),
       (Engineer, 145000), 2,
       (Analyst, 67000, 5),
       (Recruiter, 82000, 4),
       (Secretary, 65000, 6);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (Diego, Consuela, 3, NULL),
        (Gregory, Dwyer, 12, 1),
        (Susan, Tahirkeli, 8, 2),
        (Wen, Chiang, 4, 4),
        (Barbara, Seko, 5, 3),
        (Kim, Stablowski, 9, 4),
        (Junior, Trask, 8, 1),
        (Stacy, Botz, 9, NULL)
        (Melody, Smith, 7, 2)
        