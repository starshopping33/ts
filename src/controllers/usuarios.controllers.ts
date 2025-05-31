import { Request, Response } from "express"
import { createUserService } from "../services/createUser.service"
import { getAllUsersService } from "../services/getAllUsers.service"
import { ReturnUser, UpdatedUser } from "../schemas/usuarios.schemas"
import { updateUserService } from "../services/updateUser.service"
import { deleteUserservice } from "../services/deleteuser.service"



export const createUserController = async(req:Request,res:Response):Promise<any> =>{
    const userData = req.body
    const user:ReturnUser = await createUserService(userData)
    return  res.status(201).json(user)
    
}
export const getAllUsersController=async(req:Request,res:Response):Promise<any>=>{
    const users = await getAllUsersService()
    return res.status(200).json(users)
}

export const updatedUsercontroller = async(req:Request,res:Response):Promise<any>=>{
    const userData: UpdatedUser = req.body
    const userId =parseInt(req.params.id)
    const uptadeuser= await updateUserService(userData,userId)
    return res.status(200).json(uptadeuser)

}

export const deleteUsercontrolerr = async(req:Request,res:Response):Promise<any> =>{
   
    const userId = parseInt(req.params.id)
     await deleteUserservice(userId)
    return res.status(204).send()

}