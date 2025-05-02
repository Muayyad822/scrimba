import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {

    const entryElement = data.map((entry)=> {
        return (
        <Entry
            key={entry.id}
            entry={entry}
        />
        )
    }) 
     
    return (
        <>
            <Header />
            <main className="container">
                {entryElement}
            </main>
            
        </>
    )
}


// --------------------------------------------------------------------
/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

// import jokes from "./Jokes"
// import Joke from "./components/Joke"

// export default function App() {
//     const jokeElement = jokes.map((joke) => {
//         return (
//             <>
//             <Joke
//             Setup={joke.setup}
//             Punchline={joke.punchline}
//         /> 
//         <hr />
//         </>
//         )
//     })
//     return (  
//         <>
//             {jokeElement}
//         </>
//     )
// }