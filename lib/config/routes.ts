import { Request, Response } from "express";
import { StudentsController } from "../controllers/students.controller";

export class Routes {
  public studentsController: StudentsController = new StudentsController();

  public routes(app): void {
    app.route("/").get(this.studentsController.version);

    app
      .route("/students")
      .get(this.studentsController.index)
      .post(this.studentsController.create);

      app
      .route("/students/:id")
      .get(this.studentsController.show)
      .put(this.studentsController.update)
      .delete(this.studentsController.delete);
  }
  
}