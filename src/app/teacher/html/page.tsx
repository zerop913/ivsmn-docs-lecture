import { lectureSections } from "../lecture-02";
import TeacherReader from "../teacher-reader";

export const dynamic = "force-dynamic";

export default function TeacherHtmlPage() {
  return (
    <TeacherReader
      sections={lectureSections}
      lectureNumber="02"
      title="HTML: структура документа и семантика"
      sourceHref="/web-development/lecture-02-html"
    />
  );
}
