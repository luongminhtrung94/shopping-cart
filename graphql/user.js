const graphqlUser ={
    query:`
    input RegisterRequest{
        userName: String!
        password: String!
    }

    type RegisterRespone{
        hello:String
    }

    type Mutation{
        register(input: RegisterRequest) : RegisterRespone
    }`,

    register:(userName , password) =>{
        return {
            hello: "success"
        }
    }

}


exports.module = graphqlUser;