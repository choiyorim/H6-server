import { mysqlUtil } from '../../../packages/utils/mysql.util';
const pool = mysqlUtil.pool;

export class User {
	constructor() {
	}

	/**
	 * model: user 생성
	 * @param userData
	 * @returns {Promise<any>}
	 */
	createUser(userData: any): Promise<any> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async function(err,connection) {
				await connection.query(`INSERT INTO users SET ?`, [userData], function (err) {
					if (err) {
						connection.release();
						reject(err);
					} else {
						connection.release();
						resolve(userData);
					}
				})
			})
		})
	}

	/**
	 * model: user 리스트 조회
	 * @returns {Promise<any>}
	 */
	listUser(): Promise<any> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async function(err,connection) {
				await connection.query(`SELECT * FROM users`, function (err, rows) {
					if (err) {
						connection.release();
						reject(err);
					} else {
						connection.release();
						resolve(rows);
					}
				})
			})
		})
	}

	/**
	 * model: user studentId 조회
	 * @param {number} studentId
	 * @returns {Promise<any>}
	 */
	getUser(userId: string): Promise<any> {
		return new Promise(async (resolve, reject) => {
			await pool.getConnection(async function(err,connection) {
				await connection.query(`SELECT * FROM users WHERE userId = ?`, [userId], function (err, rows) {
					if (err) {
						connection.release();
						reject(err);
					} else {
						connection.release();
						resolve(rows);
					}
				})
			})
		})
	}

	/**
	 * model: user 업데이트
	 * @param {number} studentId
	 * @param userData
	 * @returns {Promise<any>}
	 */
	updateUser(userId:string, userData: any): Promise<any> {
		return new Promise(async(resolve, reject) => {
			await pool.getConnection(async function(err,connection) {
				await connection.query(`UPDATE users SET ? WHERE userId = ?`, [userData,userId], function (err, rows) {
					if (err) {
						connection.release();
						reject(err);
					} else {
						connection.release();
						resolve(rows);
					}
				})
			})
		})
	}

	/**
	 * model: user 비밀번호 업데이트
	 * @param {string} userId
	 * @param userPw
	 * @returns {Promise<any>}
	 */
	updateUserPassword(userId: string, userPw: any): Promise<any> {
		return new Promise(async(resolve, reject) => {
			await pool.getConnection(async function(err,connection) {
				await connection.query(`UPDATE users SET userPw=? WHERE userId=?`,[userPw,userId], function (err, rows) {
					if (err) {
						connection.release();
						reject(err);
					} else {
						connection.release();
						resolve(rows);
					}
				})
			})
		})
	}

	/**
	 * model: user 삭제
	 * @param {number} studentId
	 * @returns {Promise<any>}
	 */
	deleteUser(userId:string): Promise<any> {
		return new Promise(async(resolve, reject) => {
			await pool.getConnection(async function(err,connection) {
				await connection.query(`DELETE FROM users WHERE userId = ?`, userId, function (err, rows) {
					if (err) {
						connection.release();
						reject(err);
					} else {
						connection.release();
						resolve(rows);
					}
				})
			})
		})
	}
}

export const user: any = new User();