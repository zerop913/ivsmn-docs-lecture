import { lectureSections } from "../lecture-03";
import TeacherReader from "../teacher-reader";

export const dynamic = "force-dynamic";

export default function TeacherCssPage() {
  return (
    <TeacherReader
      sections={lectureSections}
      lectureNumber="03"
      title="CSS: правила, каскад и первый адаптивный интерфейс"
      sourceHref="/web-development/lecture-03-css"
    />
  );
}
