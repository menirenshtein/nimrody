import { useState } from "react";
import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const [isVerified , setVerified] = useState<boolean>(false)
  const currentRoleLevel: number = roles.indexOf(role)
  currentRoleLevel > (activities.indexOf(activity)) && setVerified(true)
  return(
    isVerified
  )
};


export default useIsVerified;
