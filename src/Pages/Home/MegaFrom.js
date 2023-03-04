import React, { useReducer } from "react";

const MegaFrom = () => {
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    feedback: "",
    quentity: 0,
    term: true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return { ...state, [action.payload.name]: action.payload.value };
      case "TOGGLE":
			return { ...state, term: !state.term };
		case "INCREMENT": return {...state, quentity:state.quentity+1}
		case "DECREMENT": {
			if (state.quentity > 0) {
				return { ...state, quentity: state.quentity - 1 };
			} else {
				return state;
			}
		}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <section className="p-12 flex justify-center">
        <form
          className="shadow-lg p-8 grid grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="">First Name</label>
            <br />
            <input
              className="border-2 w-full"
              type="text"
              name="firstName"
              id="firstName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <br />
            <input
              className="border-2 w-full"
              type="text"
              name="lastName"
              id="lastName"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input
              className="border-2 w-full"
              type="email"
              name="email"
              id="email"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label htmlFor="">Gender</label>
            <br />
            <div className="flex items-center justify-between">
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />{" "}
                <span>Male</span>
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />{" "}
                <span>Female</span>
              </label>
              <label htmlFor="other">
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />{" "}
                <span>other</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="">Education</label>
            <br />
            <select
              className="w-full border-2"
              name="education"
              id=""
              onClick={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option value="ssc">SSC</option>
              <option value="hsc">HSC</option>
              <option value="honurs">Honurs</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Number of PC</label>
            <div className="flex">
              <div
                className="w-6 h-6 text-center text-white cursor-pointer bg-purple-600"
                onClick={() => dispatch({ type: "DECREMENT" })}
              >
                -
              </div>
              <div className="px-12">{state.quentity}</div>
              <div
                className="w-6 h-6 text-center text-white cursor-pointer bg-purple-600"
                onClick={() => dispatch({ type: "INCREMENT" })}
              >
                +
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="">Feedback</label>
            <br />
            <textarea
              className="border-2 w-full"
              name="feedback"
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            ></textarea>
          </div>
          <div></div>
          <div>
            <input
              type="checkbox"
              name="term"
              id=""
              onChange={() =>
                dispatch({
                  type: "TOGGLE",
                })
              }
            />{" "}
            <span>Agree all term and condition.</span>
          </div>
          <input
            className={`py-2 px-3  text-white cursor-pointer ${
              state.term ? "bg-purple-400" : "bg-purple-500"
            }`}
            type="submit"
            value="Submit"
            disabled={state.term}
          />
        </form>
      </section>
    </div>
  );
};

export default MegaFrom;
