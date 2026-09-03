import { lectureSections } from "./lecture-01";
import TeacherReader from "./teacher-reader";

export const dynamic = "force-dynamic";

export default function TeacherPage() {
  return (
    <TeacherReader sections={lectureSections} />
  );
}
