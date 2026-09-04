import Link from "next/link";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default function TeacherPage() {
  return (
    <main className={styles.catalog}>
      <header>
        <h1>Лекции преподавателя</h1>
        <p>Живые сценарии занятия: определения, объяснения, примеры и остановки для разговора с группой.</p>
      </header>

      <nav aria-label="Преподавательские лекции">
        <ol>
          <li>
            <Link href="/teacher/web">
              <span>Лекция 01</span>
              <strong>Как работает Web</strong>
              <small>16 разделов · путь запроса от адресной строки до страницы</small>
            </Link>
          </li>
          <li>
            <Link href="/teacher/html">
              <span>Лекция 02</span>
              <strong>HTML: структура документа и семантика</strong>
              <small>10 разделов · от каркаса документа до форм и доступности</small>
            </Link>
          </li>
        </ol>
      </nav>
    </main>
  );
}
