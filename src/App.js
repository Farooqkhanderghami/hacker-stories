import React, { useEffect } from "react";

function App() {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "React"
  );
  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const Handler = (event) => {
    setSearchTerm(event.target.value);
  };
  const FilterList = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

<<<<<<< HEAD
  // useEffect
  useEffect(() => {
    console.log("I will run only once at application start....");
  }, []);
=======
    // useEffect 
    useEffect(() => {
        consloe.log("I will run whenever search term changes");

    }, [searchTerm])
>>>>>>> 73821a6d2c6c7aaa3dbd212a3cebf1175d0028b2

  return (
    <div>
      <Search search={searchTerm} onSearch={Handler} />
      <List list={FilterList} />
    </div>
  );
}

const Search = ({ onSearch, search }) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" value={search} onChange={onSearch} />
    </div>
  );
};

const List = ({ list }) =>
  list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />);

const Item = ({ objectID, url, title, author, num_comments, points }) => {
  return (
    <div>
      <a href={url}>{title}</a>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
      <span>{objectID}</span>
    </div>
  );
};

export default App;
