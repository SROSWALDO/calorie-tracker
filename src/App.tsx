import { useEffect, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, inititalState } from "./reducers/activityReducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {

  const [state, dispatch] = useReducer(activityReducer, inititalState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))

  },[state.activities])
  

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>

          <button onClick={() => dispatch({ type: 'restart-app' })} disabled={state.activities.length === 0} className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white rounded-lg cursor-pointer disabled:opacity-30">Reiniciar App</button>

        </div>
      </header>

      <section className="bg-lime-500 py-5 px-5">
        <div className="max-w-4xl mx-auto" >
          <Form dispatch={dispatch} state={state} />

        </div>
      </section>

      <section className="bg-gray-800 py-9">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker activities={state.activities}/>
        </div>

      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch}/>

      </section>

    </>
  )
}

export default App
