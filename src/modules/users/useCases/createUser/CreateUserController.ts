import { Response, Request } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body
    try {
      const userCreated = this.createUserUseCase.execute({ name, email })
      console.log(userCreated)
      return response.status(201).send()
    } catch (e) {
      console.log()
      return response.status(400).json({ error: e.message })
    }
  }
}

export { CreateUserController }
