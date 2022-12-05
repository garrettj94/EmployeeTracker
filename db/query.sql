SELECT Department.department_id AS Department, Department.department_name
FROM Department
LEFT JOIN Department
ON Department.department_id = department.id
ORDER BY Department.department_id;
