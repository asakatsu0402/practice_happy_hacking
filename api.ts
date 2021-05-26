// Interface
import {
  IUser,
  createPerson
} from "./index.ts"

const Main = () => {
  const user: IUser = createPerson('katsuya', 1, 24)
  console.log (user.greetings())
}

Main()