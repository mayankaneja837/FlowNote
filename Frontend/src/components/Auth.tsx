import { ChangeEvent, useState } from "react"
import { Link,  useNavigate } from "react-router-dom"
import { SignupInput } from "@mayankaneja837/flownote-common"
import axios from "axios"
import { BACKEND_URL } from "../config"


export const Auth = ({ type }: {
    type: "signup" | "signin"
}) => {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"? "signup":"signin"}`,postInputs)
            const jwt=response.data
            localStorage.setItem("token",jwt)
            navigate("/blog/:id")
        } catch(e){
            console.log(e)
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="mt-2 text-gray-400">
                        {type ==="signin"?"Don't have an account?":"Already have an account?"} <Link className="pl-1 underline " to={type==="signin"?"/signup":"/signin"}>{type ==="signin"?"Sign-up":"Log-In"}</Link>
                    </div>
                </div>
                <div className="pt-8">
                   {type==="signup" ? <LabelledInput label="Name" placeholder="Enter your name" type="text" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })

                    }} /> :null }
                    <LabelledInput label="Email" placeholder="Enter your email" type="text" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" placeholder="Enter your password" type="password" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="text-white w-full mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 cursor-pointer">{type==="signup"?"Sign-up":"Sign-in"}</button>
                </div>
            </div>
        </div>

    </div>
}

interface LabelledInputType {
    placeholder: string;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type: string
}
export function LabelledInput({ placeholder, label, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-lg mt-2  text-gray-900 dark:text-black font-bold">{label}</label>
        <input onChange={onChange} type={type} id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder} />
    </div>
}

