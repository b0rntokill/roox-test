import { User, Users } from "../../types/users";
import { NameSpace, RootState } from "../root-reducer";

export const getUsers = (state: RootState): Users => state[NameSpace.data].users;
export const getUser = (state: RootState): User | undefined => state[NameSpace.data].user;
export const getIsFound = (state: RootState): boolean => state[NameSpace.data].isFound;
export const getIsUsersLoaded = (state: RootState): boolean => state[NameSpace.data].isUsersLoaded;
export const getIsUserLoaded = (state: RootState): boolean => state[NameSpace.data].isUserLoaded;
