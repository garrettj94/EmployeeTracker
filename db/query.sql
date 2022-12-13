SELECT Department.department_name AS Department, employee.roles
FROM employee
LEFT JOIN Department
ON employee.role_id = department_id.id
ORDER BY Department.department_name;
