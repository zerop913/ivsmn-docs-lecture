"use client";

import { useEffect, useRef, useState } from "react";
import type { LectureSection } from "./lecture-01";
import styles from "./page.module.css";

type TeacherReaderProps = {
  sections: LectureSection[];
  lectureNumber: string;
  title: string;
  sourceHref: string;
};

export default function TeacherReader({ sections, lectureNumber, title, sourceHref }: TeacherReaderProps) {
  const [activeId, setActiveId] = useState(sections[0].id);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const activeIndex = sections.findIndex((section) => section.id === activeId);
  const active = sections[activeIndex];

  useEffect(() => {
    titleRef.current?.focus();
  }, [activeId]);

  function select(index: number) {
    setActiveId(sections[index].id);
  }

  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <div>
          <h1>{title}</h1>
          <p className={styles.subtitle}>Лекция {lectureNumber} · текст для ведения занятия</p>
        </div>
        <a className={styles.sourceLink} href={sourceHref} target="_blank" rel="noopener">
          Открыть материал для студентов
        </a>
      </header>

      <div className={styles.workspace}>
        <nav className={styles.navigator} aria-label="Разделы преподавательской лекции">
          <p className={styles.navigatorLabel}>Ход лекции</p>
          <ol>
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  className={section.id === activeId ? styles.activeItem : styles.item}
                  onClick={() => select(index)}
                  type="button"
                  aria-current={section.id === activeId ? "step" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <section className={styles.reader}>
          <p className={styles.readerMeta}>{activeIndex + 1} из {sections.length}</p>
          <h2 ref={titleRef} tabIndex={-1}>{active.title}</h2>
          <div className={styles.script}>
            {active.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className={styles.controls}>
            <button type="button" onClick={() => select(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0}>
              Предыдущий
            </button>
            <button type="button" onClick={() => select(Math.min(sections.length - 1, activeIndex + 1))} disabled={activeIndex === sections.length - 1}>
              Следующий раздел
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
