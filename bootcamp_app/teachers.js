const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const values = [process.argv[2] || 'JUL02']
const queryString = `
    SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
    FROM teachers
    JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
    JOIN students ON assistance_requests.student_id = students.id
    JOIN cohorts ON students.cohort_id = cohorts.id
    WHERE cohorts.name = $1
    ORDER BY teacher;
    `;

pool.query(queryString, values)
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
  })
  .catch((error) => console.log("connection error", error));