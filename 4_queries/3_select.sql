SELECT teachers.name, students.name, assignments.name, 
(assistance_requests.started_at - assistance_requests.completed_at) AS duration
FROM assignments
JOIN assistance_requests
ON assignments.id = assignment_id
JOIN students
ON student_id = students.id
JOIN teachers
ON teacher_id = teachers.id
ORDER BY duration DESC;
