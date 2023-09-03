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

export interface _Accordion {
  children: string | JSX.Element | JSX.Element[],
  label:string,
  name:string,
  isActive:any,
  isCompleted:any,
  action:any
}