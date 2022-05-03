SELECT cohorts.name AS name, AVG(completed_at-started_at) AS average_aqssistance_time
FROM assistance_requests
JOIN students
ON student_id = students.id
JOIN cohorts
ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY AVG(completed_at-started_at) ASC;