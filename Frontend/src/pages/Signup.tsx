import { Auth } from "../components/Auth"

import { Quote } from "../components/Quote"


export const Signup=()=>{
    return <div className="grid grid-cols-2 "> 
    <div>
        <Auth />
    </div>
    <div className="invisible md:visible">
    <Quote />
    </div>
        
    </div>
}