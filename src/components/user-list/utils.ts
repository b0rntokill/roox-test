import { SortType as Type } from "../../const";
import { SortType } from "../../types/state";
import { Users } from "../../types/users";

const sortUsers = (users: Users, type: SortType) => {
  switch (type) {
    case Type.City:
      return users.slice().sort((a, b) => {
        if (a.address.city.toLowerCase() < b.address.city.toLowerCase()) {
          return -1;
        }
        if (a.address.city.toLowerCase() > b.address.city.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    case Type.Company:
      return users.slice().sort((a, b) => {
        if (a.company.name.toLowerCase() < b.company.name.toLowerCase()) {
          return -1;
        }
        if (a.company.name.toLowerCase() > b.company.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    default:
      return users.slice();
  }
};

export default sortUsers;
