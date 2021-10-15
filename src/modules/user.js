import user from '../controllers/user.js'
import db from '../lib/postgres.js'

const GET_USER = `
    SELECT * FROM users
`

const INSERT_USER = `
    INSERT INTO users(
        username,
        phone,
        year,
        specialization
    )VALUES($1, $2, $3, $4)
    RETURNING *
`

const UPDATE_USER = `
    WITH old_data as (
        SELECT
        user_id,
        username,
        phone,
        year,
        specialization
        FROM users
        WHERE user_id = $1
    ) UPDATE users u SET
        username = (
            CASE
                WHEN length($2) > 1 THEN $2
                ELSE o.username
            END),
        phone = (
            CASE 
                WHEN length($3) > 1 THEN $3
                ELSE o.phone
            END),
        year = (
            CASE 
                WHEN $4 > 1 THEN $4
                ELSE o.year
            END),
        specialization = (
            CASE
                WHEN length($5) > 1 THEN $5
                ELSE o.specialization
            END)
    FROM old_data o
    WHERE u.user_id = $1
    RETURNING u.*
`

const DELETE_USER = `
    DELETE FROM users
    WHERE user_id = $1
    RETURNING *
`

const GetUser =  () => {
    try {
        return db(GET_USER)
    } catch (error) {
        throw error
    }
}

const PostUser = ({username, phone, year, specialization}) => {

    try {
        return db(INSERT_USER, [username, phone, year, specialization])
    } catch (error) {
        throw error
    }
}

const PutUser = ({userId, username= ' ', phone=' ', year=0, specialization=' '}) => {
    try {
        return db(UPDATE_USER, [userId, username, phone, year, specialization])
    } catch (error) {
        throw error
    }
}

const DeleteUser = ({ userId }) => {
    try {
        return db(DELETE_USER, [userId])
    } catch (error) {
        throw error
    }
}

export default {
    GetUser,
    PostUser,
    PutUser,
    DeleteUser
} 
