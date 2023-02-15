import sql from 'mssql';

const sqlConfig: sql.config = {
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

export async function getConnection(): Promise<any> {
  try {
    const pool: sql.ConnectionPool = await sql.connect(sqlConfig);
    return pool;
    // const result = await pool.request().query('SELECT 1');
    // console.log(result);
  } catch (e) {
    console.error(e);
  }
}

getConnection()
  .then(() => {
    console.log('Ready connection! 😀👍');
  })
  .catch((e) => {
    console.log('Error 😥 --> ', e);
  });
