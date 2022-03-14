export type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
};

export type UserRequest = {
  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
  website: string;
};

export type Users = User[];
