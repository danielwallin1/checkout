export interface _Card {
  deceased: {
    name: string,
    message: string,
  },
  icon:string,
}

export interface _Deceased {
  deceased: {
    name: string,
    lifespan: string,
    city:string,
    funeral:string,
    message:string|undefined
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

export interface _Modal {
  children: string | JSX.Element | JSX.Element[],
  isVisible:boolean
}

export interface _StepState {
  active: {},
  completed: {}
}

export interface _DonationState {
  deceased: {
    name:string,
    lifespan:string,
    city:string,
    message:string,
    funeral:string
  },
  donator: {
    firstname:string,
    lastname:string,
    address:string,
    street:string,
    postal:string,
    city:string,
    email:string,
    phone:string,
    social:string
  },
  amount:string,
  icon:string,
  modal:boolean
}

export interface _Flower {
  name:string,
  file:string
}

export interface _Amount {
  label:string
}

export interface _Keyable {
  [key: string]: any  
}