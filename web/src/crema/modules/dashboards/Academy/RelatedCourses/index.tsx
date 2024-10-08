import React from "react";
import AppCard from "@crema/components/AppCard";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseItem from "./CourseItem";
import { StyledRelatedCourseSlider } from "./index.styled";
import { RelatedCoursesDataType } from "@crema/types/models/dashboards/AcademyType";

type RelatedCoursesProps = {
  relatedCourses: RelatedCoursesDataType[];
};

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ relatedCourses }) => {
  const { messages } = useIntl();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AppCard heightFull title={messages["academy.relatedCourses"] as string}>
      <StyledRelatedCourseSlider {...settings}>
        {relatedCourses.map((data, index) => (
          <CourseItem key={index} data={data} />
        ))}
      </StyledRelatedCourseSlider>
    </AppCard>
  );
};

export default RelatedCourses;
