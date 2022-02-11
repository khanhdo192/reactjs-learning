import { useEffect, useLayoutEffect, useState } from "react"

//  1.useEffect(callback)
//  - goi callback moi khi component re-render
//  - goi callback sau khi component them element vao DOM
//  2.useEffect(callback, [])
// - chi goi callback 1 lan sau khi component mount
//  3.useEffect(callback, [deps])
// - callback dc goi lai moi khi deps thay doi
// 4. useLayoutEffect
// - goi callback roi moi re-render


const tabs = ['posts', 'comments', 'albums']
const lessons = [
    {
        id: 1,
        name: 'js1'
    },
    {
        id: 2,
        name: 'js2'
    },
    {
        id: 3,
        name: 'js3'
    },
]

function Content() {
    // callback luon dc goi sau khi component mount

    // useEffect callback
    const [title, setTitle] = useState('')
    useEffect(() => {
        document.title = title
    })

    // useEffect call API with deps change
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    // useEffect go to top with deps no change
    const [goToTop, setGoToTop] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        // cleanup luon dc goi truoc khi unmouted 
        // va truoc khi callback dc goi tru luc mounted
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const handleScrollTop = () => {
        document.documentElement.scrollTop = 0
    }

    // useEffect resize width
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // useEffect countdown
    const [cd, setCd] = useState(180)
    useEffect(() => {
        const time = setInterval(() => {
            setCd(prev => prev - 1)
        }, 1000)

        return () => clearInterval(time)
    }, [])

    // useEffect preview img upload
    const [ava, setAva] = useState()
    useEffect(() => {
        return () => {
            ava && 
            ava.preview.map((index) => {
                URL.revokeObjectURL(ava.preview[index])
            })
        }
    }, [ava])
    const handlePreviewAvatar = (e) => {
        const files = e.target.files
        const arrFile = Array.from(files)
        const arrLink = []
        arrFile.map((file) => {
            const urlFile = URL.createObjectURL(file)
            arrLink.push(urlFile)
        })
        files.preview = arrLink
        setAva(files)
    }

    // useEffect fake lesson comment
    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    // useLayoutEffect
    const [count, setCount] = useState(0)
    // xu ly sync re-render
    useLayoutEffect(() => {
        if(count > 3){
            setCount(0)
        }
    }, [count])

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ paddingLeft: '20px' }}>
            <h1>useEffect</h1>
            {/* test useLayoutEffect */}
            <h1>{count}</h1>
            <button onClick={handleCount}>Count to 3</button>

            {/* test fake chat */}
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                            'red' : '#333'
                        }}
                        onClick={() => {
                            setLessonId(lesson.id)
                        }}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>

            {/* test preview img upload */}
            <div>
                Image:<input 
                    type='file'
                    onChange={handlePreviewAvatar}
                    multiple
                />
                <br />
                {ava && 
                    ava.preview.map((a, index) => (
                        <img key={index} src={a} alt="" width="20%"/>
                ))}
            </div>

            {/* test resize window/ countdown */}
            <div>
                <h3>Window width: {width}</h3>
                <h3>Countdown form 180: {cd}</h3>
            </div>

            {/* test change page title */}
            Title:<input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <br />
            {/* test change tab call API */}
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? 
                        {color: '#fff', 
                        backgroundColor: '#333',
                        } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {/* test go to top */}
            {goToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                    onClick={handleScrollTop}
                >
                    Gototop
                </button>
            )}
        </div>
    )
}

export default Content