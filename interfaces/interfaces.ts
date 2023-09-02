export interface _Message {
  deceased: {
    name: string,
    message: string,
  },
  icon:string,
  isVisible:boolean
}

export interface _Deceased {
  deceased: {
    name: string,
    lifespan: string,
    city:string,
    funeral:string,
    message:string
  }
}