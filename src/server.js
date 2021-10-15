import  express  from 'express'
import {PORT, host} from './config.js'
import UserRouter from './routes/user.js'

const app = express()

app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )
app.use( UserRouter )

app.listen(PORT, () =>{
    console.log('Server is running on http://' + host + ':' + PORT);
})