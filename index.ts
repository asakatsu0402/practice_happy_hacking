export interface IUser {
  name: string
  id: number
  age: number
  greetings(): string // 返ってくる値の型
}

class User<T> implements IUser {
  constructor (public name: string, public id: number, public age: number) { }
  greetings (): string {
    return ''
  }
}

export class Japanese implements IUser {
  constructor(public name: string, public id: number, public age: number) { }
  greetings (): string {
    return `ヤッホーーーー!${this.name} ${this.id}番 ${this.age}歳`
  }
}

export class English implements IUser {
  constructor(
    public name: string,
    public id: number,
    public age: number
  ) { }
  greetings (): string {
    return `Hi!${this.name} ${this.id}番 ${this.age}歳`
  }
}

export const createPerson:<T> = (
  name: string,
  id: number,
  age: number
): T => {
  // const user: T = new
  return new English(name, id, age)
}