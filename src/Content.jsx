import { Part } from "./Part";

export const Content = ({ courseData }) => {
  return (
    <>
      <Part part={courseData[0].part} exercises={courseData[0].exercises} />
      <Part part={courseData[1].part} exercises={courseData[1].exercises} />
      <Part part={courseData[2].part} exercises={courseData[2].exercises} />
    </>
  );
};
