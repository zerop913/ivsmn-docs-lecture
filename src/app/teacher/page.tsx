import { lectureSections } from "./lecture-01";
import TeacherReader from "./teacher-reader";

export const dynamic = "force-dynamic";

export default function TeacherPage() {
  return (
    <TeacherReader
      sections={lectureSections}
      lectureNumber="01"
      title="Как работает Web"
      sourceHref="/web-development/lecture-01"
    />
  );
}
