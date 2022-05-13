import { Request, Response } from 'express'

import { ListAllUsersUseCase } from './ListAllUsersUseCase'

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body
    try {
      const allUsers = this.listAllUsersUseCase.execute(id)
      return response.json(allUsers)
    } catch (e) {
      return response.status(400).json({ error: e.message })
    }
  }
}

export { ListAllUsersController }
