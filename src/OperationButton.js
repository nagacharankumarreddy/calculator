import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation, active }) {
  return (
    <button
      className={`key-op ${active === operation ? "is-active" : ""}`}
      aria-label={operation === "*" ? "multiply" : operation}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation === "*" ? "×" : operation}
    </button>
  )
}
