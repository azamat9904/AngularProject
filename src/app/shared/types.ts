export interface NavItem {
  content:string;
  url:string;
  disabled:boolean;
}

export interface SidebarItem{
  content:string;
  url:string;
  active:boolean;
}
export interface Logo{
  id:string;
  name:string;
  src:string;
  url:string;
}
export interface Address {
  street:string;
  suite:string;
  city:string;
  zipCode:string;
}
export interface Company {
  name:string;
  catchPhrase:string;
  bs:string;
}
export interface User {
  id:number;
  name:string;
  email:string;
  address:Address;
  phone:string;
  website:string;
  company:Company;
}
