import React, { useState } from "react";

const gifts = ["Logitech", "Asus", "Gigabyte"];

const courses = [
  {
    id: 1,
    name: "ReactJs",
  },
  {
    id: 2,
    name: "NoedJs",
  },
  {
    id: 3,
    name: "Redux",
  },
];

const Jobs = () => {
  const [job, setJob] = useState("");
  const [listJob, setListJob] = useState(() => {
    // Change JSON to Array
    const storageJobs = JSON.parse(localStorage.getItem("jobs")); // jobs là key

    return storageJobs ?? [];
  });

  const handleSubmit = () => {
    // setListJob(prev => [...prev, job]);
    if (job !== "") {
      setListJob((prev) => {
        const newJobs = [...prev, job];

        // Save to local storage and change to JSON
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem("jobs", jsonJobs);

        return newJobs;
      });
    }
    // Clear input text
    setJob("");
  };

  const handleDelete = () => {
    setListJob(() => {
      localStorage.clear("jobs");
      return listJob.splice(0);
    });
  };

  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [checked, setChecked] = useState([]);

  const handleSubmit2 = () => {
    console.log({ ids: checked, name: name, email: email });
  };
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);

      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      <h1>useState</h1>
      Job:
      <input value={job} onChange={(event) => setJob(event.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <button onClick={handleDelete}>Clear All</button>
      <ul>
        {listJob.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
      <h3>{gift || "No Gift"}</h3>
      <button onClick={randomGift}>Random Gift</button>
      <br />
      Name:
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Email:
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit2}>Regiter</button>
    </div>
  );
};

export default Jobs;
