import './App.css'
import {useEffect, useState} from 'react'
// import axios from 'axios'

//===============================================================================================================================================================

type tagsInputType = {id:number, title:string}

//===============================================================================================================================================================

function App() {

    // сперва нет данных
    const [tags, setTags] = useState<Array<tagsInputType>>([])

    // после первой отрисовки без данных
    // Апп получит даные с сервера - АСИНХРОННО и отрисует их
    useEffect(()=> {
        setTimeout(() => {
            console.log('useEffect => COMPLETED')
            setTags([
                {id:1, title: 'CSS'},
                {id:2, title: 'TS'},
                {id:3, title: 'React'},
                {id:4, title: 'HTML'}
            ])
        }, 2000)

        // функция будет запущена один раз, так как - deps: []
    }, [])

    console.log('rendering => COMPLETED')
    return (
        <div>
            <div>
                {tags.map(item => (<div key={item.id.toString()}>{item.title}</div>))}
            </div>
        </div>
    )
}

export default App
