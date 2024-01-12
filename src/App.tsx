import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

//===============================================================================================================================================================

type PhotoSizeViewModel = {
    url: string;
    width: number;
    height: number;
    fileSize: number;
}

type TodolistImagesViewModel = {
    main: PhotoSizeViewModel[];
}

type TodolistViewModel = {
    isImportant: boolean;
    id: string;
    title: string;
    description: string;
    addedDate: string;
    order: number;
    images: TodolistImagesViewModel;
}

type GetTodolistResponse = {
    pagesCount: number;
    page: number;
    pageSize: number;
    totalCount: number;
    items: TodolistViewModel[];
}

//===============================================================================================================================================================

function App() {

    const [todoLists, setTodoLists] = useState<GetTodolistResponse | null>(null)

    useEffect(() => {

        axios.get<GetTodolistResponse>('https://todolists.samuraijs.com/api/1.0/todolists?pageNumber=1&pageSize=10').then(response => {
            console.log(response.data)
            setTodoLists(response.data)
        })


    }, [])

    return (
        <div>
            <div>
                {todoLists === null ?
                    <h3>'loading'</h3>
                    : todoLists.items.map(item => {
                        const imageUrl = item.images.main.length > 1 ? item.images.main[1]?.url : 'http://placehold.co/48'
                        return (
                            <div key={item.id.toString()}>
                                <img src={imageUrl} alt="sry"/>
                                <h3>
                                    {item.isImportant ? '✅' : ''}
                                    {item.title}
                                </h3>
                                <div>{item.description}</div>
                            </div>
                        )

                    })}
            </div>
        </div>
    )
}

export default App
