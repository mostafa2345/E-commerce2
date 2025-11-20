import dotenv from 'dotenv'

dotenv.config()
const isDev=process.env.NODE_ENV==='development'

export const log=(...args)=>{
if(isDev){
    console.log(...args)
}
}