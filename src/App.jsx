import Router from "./routes/Router"
import { PokeStatsProvider } from "./context/Pokemon_states";


const App = () => {

  return (
    <>  
      <PokeStatsProvider>
          <Router />
      </PokeStatsProvider>

    </>
  )
}

export default App
