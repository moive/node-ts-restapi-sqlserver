import sql from 'mssql';

const sqlConfig = {
  user: process.env['DB_USER'] as string,
  password: process.env['DB_PASSWORD'] as string,
  server: process.env['DB_HOST'] as string,
  database: process.env['DB_NAME'] as string,
  // port: process.env['DB_PORT'],
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function getConnection(): Promise<void> {
  const pool = await sql.connect(sqlConfig);
  const result = await pool.request().query('SELECT 1');

  console.log(result);
}

getConnection()
  .then(() => {
    console.log('Ready connection! 😀👍');
  })
  .catch((e) => {
    console.log('Error 😥 --> ', e);
  });
