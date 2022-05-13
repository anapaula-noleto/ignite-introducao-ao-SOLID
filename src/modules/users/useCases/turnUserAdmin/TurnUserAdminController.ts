import { Request, Response } from 'express'

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase'

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body
    try {
      const user = this.turnUserAdminUseCase.execute(id)
      return response.json(user)
    } catch (err) {
      return response.status(404).json({ error: err })
    }
  }
}

export { TurnUserAdminController }
