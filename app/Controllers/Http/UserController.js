'use strict'
const { validate } = use('Validator')

const User = use('App/Models/User')

class UserController {
    async register({ request, response }) {
        try {
            const rules = {
                email: 'required|email|unique:users,email',
                password: 'required'
            }
            const userPayloadData = request.only(['email', 'password'])
            const validation = await validate(userPayloadData, rules)
            if(validation.fails())
                return response.status(400).send(validation.messages())
            userPayloadData.verification_token = "token"

            const user = await User.create(userPayloadData)
            return response.status(200).send(user)

        } catch (e) {
            console.log(e);
            
        }
    }
}

module.exports = UserController
