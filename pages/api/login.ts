import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import { jwt } from '../../utils'

import User from '../../models/User'
import { db } from '../../database'

type Data = 
| { message: string }
| {
    token: string
    user: {
        email: string,
        name: string,
        role: string
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse ) {

    switch ( req.method ) {
        case 'POST':
            return loginUser(req, res)
        
        default:
            res.status(400).json({
                message: 'Bad request',
            })
    }

}

const loginUser = async(req: NextApiRequest, res: NextApiResponse) => {

    const { email = '', password = '' } = req.body;

    await db.connect()
    const user = await User.findOne({email})
    await db.disconnect()

    if ( !user ) {
        return res.status(400).json({message:'Correo o contraseña no válidos -EMAIL'})
    }

    if ( !bcrypt.compare(password, user.password! ) ) {
        return res.status(400).json({message:'Correo o contraseña no válidos -PSSWD'})
    }

    const { role, name, _id } = user

    const token = jwt.signToken( _id, email )

    return res.status(200).json({
        token, //jwt
        user: { email, role, name }
    })


}