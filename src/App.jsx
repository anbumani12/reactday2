import React from 'react';
import Card from './components/Card'
function App() {
  let data = [
    {
      title: "Project one",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.`
    },
    {
      title: "Project two",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.`
    },
    {
      title: "Project three",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident nemo repellat fugiat excepturi! Nemo, esse.`
    },
    {
      title: "Project four",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident,  nemo repellat fugiat excepturi! Nemo, esse.`
    },
    {
      title: "Project five",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.`
    },
    {
      title: "Project six",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.`
    },
  ];

  return <>
    
      <div className="container">
        <h1 className="my-4">Page Heading
          <small>Secondary Text</small>
        </h1>

        <div className="row">
          {
          data.map((e, i) => {
            return <Card cardData={e} key={i}/>
          })
        }     
        </div>
      </div>
    </>
}

export default App;
