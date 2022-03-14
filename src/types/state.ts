import { User, Users } from "./users";
export type SortType = string | undefined;

export type AppData = {
  users: Users;
  user: User | undefined;
  isFound: boolean;
  isUsersLoaded: boolean;
  isUserLoaded: boolean;
};

export type AppProcess = {
  sortType: SortType;
};
