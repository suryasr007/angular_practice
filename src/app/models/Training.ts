export interface Training{
    title:string,
    email:string,
    tags?:string,
    description?:string,    
    completed?:Boolean,
    date?: any,
    hide?: Boolean
}

// ?: is used to define optional parameters for a model or interface