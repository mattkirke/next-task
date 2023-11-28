import Link from "next/link"

async function getList(){
    await new Promise(resolve => setTimeout(resolve, 1000))

    const response = await fetch('http://localhost:3001/lists',{
        next: { 
            revalidate: 0
        }
    })
    return response.json()
}
export default async function List(){
    const lists = await getList()
    // console.log(lists)
    return (
        <div>
            {lists.map((list) => (
                <div className="card" key={list.id}>
                    <Link href={`/list/${list.id}`}>
                        <h3>{list.title}</h3>
                        <p>{list.body.slice(0, 100)}...</p>
                        <div className={`pill ${list.priority}`}>
                            {list.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {lists.lengtht === 0 && (
                <p>There are no jobs on your closing list, well done!</p>
            )}
        </div>
    )
    
}
