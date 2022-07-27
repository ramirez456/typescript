import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { name, age , version} from './bases/01-types'
import { picacku } from './bases/02-objects'
import { binazord } from './bases/04-injection'
// import { charmander } from './bases/05-decoradores'
import { charmander } from './bases/06-decoratos2'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript+ ${name}</h1>
    <h1> Sice  ${age}</h1>
    <h1> ${version}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div>
      ${charmander.name}
    </div>
  </div>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
