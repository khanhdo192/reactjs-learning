import { useState } from 'react'
import Count from './component/Count';
import Header from './component/Header';
import Content from './Content'

// const gifts = [
//   'a',
//   'b',
//   'c'
// ]

// const courses = [
//   {
//     id: 1,
//     name: 'js'
//   },
//   {
//     id: 2,
//     name: 'js'
//   },
//   {
//     id: 3,
//     name: 'js'
//   },
// ]

function App() {
  
  // const [gift, setGift] = useState()

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length)

  //   setGift(gifts[index])
  // }
  
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const [checked, setChecked] = useState([])

  // const handleSubmit = () => {
  //   console.log({ids: checked})
  // }
  // const handleCheck = (id) => {
  //   setChecked(prev => {
  //     const isChecked = checked.includes(id)

  //     if(isChecked){
  //       return checked.filter(item => item !== id)
  //     }else{
  //       return [...prev, id]
  //     }
  //   })
  // }

  // return (
  //   <div className="App" style={{padding : 20}}>
  //     {/* <h1>{gift || 'no gift'}</h1>
  //     <button onClick={ randomGift }>Gift</button>
  //     {/* <input 
  //       value={name}
  //       onChange={e => setName(e.target.value)}
  //     />
  //     <input 
  //       value={email}
  //       onChange={e => setEmail(e.target.value)}
  //     /> */}
  //     {courses.map(course => (
  //       <div key={course.id}>
  //         <input 
  //           type='checkbox'
  //           checked={checked.includes(course.id)}
  //           onChange={() => handleCheck(course.id)}
  //         />
  //         {course.name}
  //       </div>
  //     ))}
  //     <button onClick={handleSubmit}>Regiter</button>
  //   </div>
  // );
  const [job, setJob] = useState('');
  const [listJob, setListJob] = useState(() => {
    // Change JSON to Array (2)
    const storageJobs = JSON.parse(localStorage.getItem('jobs')); // jobs là key

    return storageJobs ?? []
  });

  const handleSubmit = () => {
    // setListJob(prev => [...prev, job]);
    if(job !== ''){
      setListJob(prev => {
        const newJobs = [...prev, job];

        // Save to local storage and change to JSON (1)
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jsonJobs);

        return newJobs;
      })
    }

    // Clear input text
    setJob('')
  }

  const handleDelete = () => {
    setListJob(() => {
      localStorage.clear('jobs');
      return listJob.splice(0)
    })
  }

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <Header />
      <Count />
      <h1>useState</h1>
      <input
        value={job}
        onChange={event => setJob(event.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleDelete}>Clear All</button>

      <ul>
        {listJob.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
