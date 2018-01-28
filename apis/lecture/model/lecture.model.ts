import {mysqlResource} from "../../../resource/mysql.resource";

const conn = mysqlResource.conn;

export class Lecture{

    /**
     * model: lecture 생성
     * @param lectureData
     * @returns {Promise<any>}
     */
    createLecture(lectureData: any): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query('INSERT INTO lectures SET ?', lectureData, function(err){
                if(err){
                    reject(err);
                }else{
                    resolve(lectureData);
                }
            });
        })
    }

    /**
     * model: lecture 리스트 조회
     * @returns {Promise<any>}
     */
    listLecture(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query('SELECT * FROM lectures', function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: lecture index 조회
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    getLecture(lectureIndex: number): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query('SELECT * FROM lectures WHERE lectureIndex = ?', lectureIndex, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: lecture professsorName 조회
     * @param {string} professorName
     * @returns {Promise<any>}
     */
    getLectureProfessorName(professorName: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query('SELECT * FROM lectures JOIN professors USING(professorIndex) WHERE professorName = ?', professorName, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: lecture lectureName 조회
     * @param {string} lectureName
     * @returns {Promise<any>}
     */
    getLectureName(lectureName: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM lectures WHERE lectureName LIKE '%${lectureName}%'`, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: lecture track 조회
     * @param {string} track
     * @returns {Promise<any>}
     */
    getLectureTrack(track: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM lectures WHERE track LIKE '%${track}%'`, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: lecture 업데이트
     * @param {number} lectureIndex
     * @param lectureData
     * @returns {Promise<any>}
     */
    updateLecture(lectureIndex: number,lectureData: any): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query('UPDATE lectures SET ? WHERE lectureIndex = ?', [lectureData, lectureIndex], function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: lecture 삭제
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    deleteLecture(lectureIndex: number): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await conn.query('DELETE FROM lectures WHERE lectureIndex = ?', lectureIndex, function(err, rows){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            })
        })
    }

}

export const lecture: any = new Lecture();