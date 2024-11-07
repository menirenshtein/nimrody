import { useState, useEffect } from "react";
import BuildingDataFromFile from "../data/building.json";

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  
  useEffect(()=>{
    setBuildingData(BuildingDataFromFile)
  },[])

  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    const chosenF: Floor = BuildingDataFromFile[floorIndex];
    return chosenF && chosenF;
  };
  const getListOfActivities = (): string[] => {
    const activities = BuildingDataFromFile.map((a) => {
      return a.activity;
    });
    return activities && activities;
  };
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities,
  };
};

export default useBuildingData;
