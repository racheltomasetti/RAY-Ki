"use client";

import { useEffect, useState } from "react";
import { KanbanData } from "@/app/types/kanban";
import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  const [kanbanData, setKanbanData] = useState<KanbanData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/kanban.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load kanban data");
        }
        return response.json();
      })
      .then((data: KanbanData) => {
        setKanbanData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-[var(--tx-2)] italic">Loading...</p>
      </div>
    );
  }

  if (error || !kanbanData) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-[var(--tx-2)] italic">
          Error loading kanban board: {error}
        </p>
      </div>
    );
  }

  // Filter cards by status
  const todoCards = kanbanData.cards.filter((card) => card.status === "todo");
  const doingCards = kanbanData.cards.filter((card) => card.status === "doing");
  const doneCards = kanbanData.cards.filter((card) => card.status === "done");

  return (
    <div className="w-full space-y-6">
      {/* Color Key */}
      <div className="flex flex-wrap items-center justify-center gap-4 pb-4 border-b border-[var(--ui-2)]">
        <span className="text-sm font-semibold text-[var(--tx-2)] italic">
          Projects:
        </span>
        {Object.entries(kanbanData.projects).map(([key, project]) => (
          <a
            key={key}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            <div
              className={`w-4 h-4 rounded border-2 bg-[var(--${project.colorClass})]`}
            />
            <span className="text-sm text-[var(--tx)] hover:underline">
              {project.name}
            </span>
          </a>
        ))}
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KanbanColumn
          title="to do"
          cards={todoCards}
          projects={kanbanData.projects}
        />
        <KanbanColumn
          title="doing"
          cards={doingCards}
          projects={kanbanData.projects}
        />
        <KanbanColumn
          title="done"
          cards={doneCards}
          projects={kanbanData.projects}
        />
      </div>
    </div>
  );
}
