
import { useMemo } from "react"
import { Activity } from "../types"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories: total,0), [activities])
    const caloriesExercise = useMemo(() => activities.reduce((acumulador, activity) => activity.category === 2 ? acumulador + activity.calories : acumulador ,0),[activities])

    const diferenceCalories = useMemo(() => caloriesConsumed - caloriesExercise ,[activities])

    

  return (
    <div>
      <h1 className="text-center text-white text-3xl font-bold">Resumen de Calorias</h1>
      <div className="flex justify-between text-white text-center mt-10">
        <div>
            <p className="text-5xl font-bold">{caloriesConsumed}</p>
            <p>Consumidas</p>
        </div>

        <div>
            <p className="text-5xl font-bold">{caloriesExercise}</p>
            <p>Ejercicio</p>
        </div>

        <div>
            <p className="text-5xl font-bold">{diferenceCalories}</p>
            <p>Diferencia</p>
        </div>

      </div>
    </div>
  )
}
