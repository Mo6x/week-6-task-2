import { Request, Response } from 'express';
import {
  getDb,
  createRecord,
  getSingleRec,
  deleteRecord,
  updateRecord,
} from '../model/model';

export async function getAllUsers(req: Request, res: Response) {
  const database = await getDb();
  res.status(200).json(database);
}

export async function createUser(req: Request, res: Response) {
  const input = req.body;
  const body = await createRecord(input);
  res.status(201).json(body);
  // res.end(JSON.stringify(body));
}

export async function getUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  // const database = await getDb();
  const data = await getSingleRec(id);
  res.status(200).json(data);
  // res.end(JSON.stringify(data));
}

export async function updateUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  const input = req.body;
  const body = await updateRecord(id, input);
  res.status(200).json(body);
  // res.end(JSON.stringify(body));
}

export async function deleteUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  const body = await deleteRecord(id);
  res.status(200).json(body);
  // res.end(JSON.stringify(body));
}

export default {
  getAllUsers,
  getDb,
};
