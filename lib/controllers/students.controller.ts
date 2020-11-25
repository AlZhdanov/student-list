import { Request, Response } from "express";
import { Student, StudentInterface } from "../models/student.model";
import { UpdateOptions, DestroyOptions } from "sequelize";

export class StudentsController {

  public version(req: Request, res: Response) {
      res.json({api: "Student api v1"});  
  }

  public index(req: Request, res: Response) {
      Student.findAll<Student>({})
        .then((students: Array<Student>) => res.json(students))
        .catch((err: Error) => res.status(500).json(err));
    }

  public create(req: Request, res: Response) {
    const params: StudentInterface = req.body;

    Student.create<Student>(params)
      .then((student: Student) => res.status(201).json(student))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response) {
    const studentId: number = Number(req.params.id);

    Student.findByPk<Student>(studentId)
      .then((student: Student | null) => {
        if (student) {
          res.json(student);
        } else {
          res.status(404).json({ errors: ["Student not found"] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response){
    const studentId: number = Number(req.params.id);
    const params: StudentInterface = req.body;

    const update: UpdateOptions = {
      where: { id: studentId },
      limit: 1,
    };

    Student.update(params, update)
      .then(() => res.status(202).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response) {
    const studentId: number = Number(req.params.id);
    const options: DestroyOptions = {
      where: { id: studentId },
      limit: 1,
    };

    Student.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }
}