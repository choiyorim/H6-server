import { mysqlResource } from '../../../packages/utils/mysql.util';
const conn = mysqlResource.conn;

export class Professor {
    constructor() {
    }

    /**
     * model: professor 생성
     * @param professorData
     * @returns {Promise<any>}
     */
    createProfessor(professorData: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`INSERT INTO professors SET ?`, [professorData], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(professorData);
                }
            })
        })
    }

    /**
     * model: professor 리스트 조회
     * @returns {Promise<any>}
     */
    listProfessor(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM professors`, function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: professor professorIndex 조회
     * @param {number} professorIndex
     * @returns {Promise<any>}
     */
    getProfessorByProfessorIndex(professorIndex: number): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM professors WHERE professorIndex=?`, [professorIndex], function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: professor professorName 조회
     * @param {string} professorName
     * @returns {Promise<any>}
     */
    getProfessorByProfessorName(professorName: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM professors WHERE professorName LIKE '%${professorName}%'`, function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: professor 업데이트
     * @param {number} professorIndex
     * @param professorData
     * @returns {Promise<any>}
     */
    updateProfessor(professorIndex:number, professorData: any): Promise<any> {
        return new Promise(async(resolve, reject) => {
            await conn.query(`UPDATE professors SET ? WHERE professorIndex=?`, [professorData,professorIndex], function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: professor 삭제
     * @param {number} professorIndex
     * @returns {Promise<any>}
     */
    deleteProfessor(professorIndex:number): Promise<any> {
        return new Promise(async(resolve, reject) => {
            await conn.query(`DELETE FROM professors WHERE professorIndex=?`,professorIndex,function(err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }
}

export const professor: any = new Professor();