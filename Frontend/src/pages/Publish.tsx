import { Appbar } from "../components/Appbar"

export const Publish = () => {
    return <div>
        <Appbar />
        <div className="flex justify-center">

            <div className="max-w-screen-lg w-full pt-5">
                <textarea id="message" className=" max-w-screen-lg block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>

            </div>
        </div>
    </div>
}