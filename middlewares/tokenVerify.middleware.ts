import * as express from 'express';
import { verifyUser } from './tokenVerify/tokenVerify';

export async function verify(req: express.Request, res: express.Response, next: Function) {
	let token = req.headers['x-access-token'];
	if (!token) {
		return res.status(403).json({
			success: false,
			statusCode: 403,
			message: 'You do not have permission'
		})
	}
	try {
		const result: any = await verifyUser(token);
		res.json({
			success: true,
			info: result
		})
	} catch (err) {
		res.status(403).json({
			success: false,
			statusCode: 403,
			message: err.message
		})
	}
	next();
}
