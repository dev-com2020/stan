import './App.css';
import { ApolloClient,
          InMemoryCache,
          ApolloProvider
 } from '@apollo/client';
import { Header } from './Header';


const queryClient = new ApolloClient({
  uri: process.env.REACT_APP_GITHUB_URL!,
  cache: new InMemoryCache(),
  headers:{
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`
  }
})

function App() {
return (
  <ApolloProvider client={queryClient}>
    <Header/>
    {/* <RepoPage /> */}
  </ApolloProvider>


  // <div>
  //   <Provider store={store}>
  //   <Header/>
  //   <Main/>
  //   </Provider>
  //   </div>
  // <PostsPage/>
)
}
export default App;