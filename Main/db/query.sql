SELECT employees_db.employee AS first_name, last_name
FROM employee
LEFT JOIN role
ON role.id = employee id
ORDER BY last_name;

-- practice purporses