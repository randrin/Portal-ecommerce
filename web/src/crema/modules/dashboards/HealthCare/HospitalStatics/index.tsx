import React from "react";
import AppCard from "@crema/components/AppCard";
import {
  StyledHospitalStaticsContent,
  StyledHospitalStaticsThumb,
  StyledHospitalStatistics,
} from "./index.styled";
import type { DosesType } from "@crema/types/models/dashboards/HealthCare";

type HospitalStaticsProps = {
  data: DosesType;
};

const HospitalStatics: React.FC<HospitalStaticsProps> = ({ data }) => {
  const { bgColor, icon, value, name } = data;

  return (
    <AppCard
      heightFull
      style={{ backgroundColor: bgColor, color: "white" }}
      className="card-hover"
    >
      <StyledHospitalStatistics>
        <StyledHospitalStaticsThumb>
          <img src={icon} alt="icon" />
        </StyledHospitalStaticsThumb>
        <StyledHospitalStaticsContent>
          <h5 className="text-truncate title">{value}</h5>
          <p className="text-truncate">{name}</p>
        </StyledHospitalStaticsContent>
      </StyledHospitalStatistics>
    </AppCard>
  );
};

export default HospitalStatics;
