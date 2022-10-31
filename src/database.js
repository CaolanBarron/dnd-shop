var faunadb = require('faunadb');
var q = faunadb.query;

// Connects to FAUNADB Database
var client = new faunadb.Client({
    secret: process.env.REACT_APP_SECRET,
    endpoint: 'https://db.fauna.com/',
})


// Gets the requested user based on the FAUNADB primary key
// (May need to be changed to use the users google ID or google ID token)
export async function getUser(ref) {
    return await client.query(
        q.Get(
            q.Ref(
                q.Collection('Users'), ref
            )
        )
    )
}

// Gets the requested shop from the FAUNNDB primary key acquired from the user
export async function getShop(ref) {
    return await client.query(
        q.Get(
            q.Ref(
                q.Collection('Shops'), ref
            )
        )
    )
}

