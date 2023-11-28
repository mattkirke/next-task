"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateList(){
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const newList = {       
            title, body, priority
        }
        try{
            const res = await fetch('http://localhost:3001/lists', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'},
                    body: JSON.stringify(newList)
            })
            if (res.status === 201){
                router.push('http://localhost:3000/list')
                router.refresh()
            }else{
                console.log('Error:', res.status, await res.text())
            }
        }catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false); // Set isLoading to false here
        }
        setTitle("")
        setBody("")
        setPriority("")
    }

    return(
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Your Title: </span>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Details: </span>
                <textarea
                    required
                    onChange={(e) => setBody (e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Task Priority: </span>
                <select
                    onChange={(e) => setPriority (e.target.value)}
                    required
                    value={priority}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add Ticket</span>}
            </button>


        </form>
    )
}