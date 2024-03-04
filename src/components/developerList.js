import { useQuery, gql } from '@apollo/client';

const GET_DEVELOPERS = gql`
query MyQuery {
  developers {
    displayText
    expertise
  }
}
`;


function DeveloperList() {
    const { loading, error, data } = useQuery(GET_DEVELOPERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.developers.map(({ displayText, expertise }) => (
        <div>
        <ul>
            <li>
                <h2>{displayText}</h2>
                <h3>Expertise: {expertise}</h3>
            </li>
        </ul>
      </div>
    ));

  }
  
  export default DeveloperList;
  