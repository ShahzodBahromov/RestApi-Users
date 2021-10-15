import model from '../modules/user.js'

const GET = async (req, res) => {
    try {
        res.json(await model.GetUser())
    } catch (error) {
        res.json({
            status: 401,
            message: 'Not found user',
            data: null
        })
    }
}

const POST = async (req, res) => {
    try {
        const user = await model.PostUser(req.body)
        if(user) {
            res.json({
                status: 201,
                message: 'Add User',
                data: user
            })
        } else throw new Error('Not Users')
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}

const PUT = async (req, res) => {
    try {
        const user = await model.PutUser(req.body)
        if(user){
            res.json({
                status: 201,
                message: 'The user update',
                data: user
            })
        } else throw new Error('Not User')
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
    }
}

const DELETE = async (req, res) => {
    try {
        const user = await model.DeleteUser(req.body)
        if(user){
            res.json({
                status: 201,
                message: 'The user delete',
                data: user
            })
        } else throw new Error('Not User')
    } catch (error) {
        res.json({
            status: 401,
            message: error.message,
            data: null
        })
        
    }
}
export default {
    GET,
    POST,
    PUT,
    DELETE
}