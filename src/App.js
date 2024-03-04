//components
import DeveloperList from "./components/developerList";
import { useQuery, gql } from '@apollo/client';

const GET_DEVELOPERS = gql`
query MyQuery {
  developers {
    displayText
    expertise
  }
}
`;

function App() {
  return (
    <div className="App">
        <h1>.NET Platforms Developer List</h1>
        <DeveloperList></DeveloperList>
        
    </div>
  );
}

export default App;
