import React from "react";

type Task = {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in-progress" | "completed";
  dueDate?: string;
  assignedTo?: string;
};

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Follow up with Acme Corp",
    description: "Send follow-up email regarding contract renewal.",
    status: "pending",
    dueDate: "2024-07-10",
    assignedTo: "Jane Doe",
  },
  {
    id: "2",
    title: "Schedule demo with Beta Inc",
    status: "in-progress",
    dueDate: "2024-07-12",
    assignedTo: "John Smith",
  },
  {
    id: "3",
    title: "Review Q2 sales leads",
    status: "completed",
    dueDate: "2024-07-01",
    assignedTo: "Jane Doe",
  },
];

function getStatusBadge(status: Task["status"]) {
  const base = "px-2 py-1 rounded text-xs font-semibold";
  switch (status) {
    case "pending":
      return <span className={`${base} bg-yellow-100 text-yellow-800`}>Pending</span>;
    case "in-progress":
      return <span className={`${base} bg-blue-100 text-blue-800`}>In Progress</span>;
    case "completed":
      return <span className={`${base} bg-green-100 text-green-800`}>Completed</span>;
    default:
      return null;
  }
}

export default function TasksPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Tasks</h1>
      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Title</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Assigned To</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Due Date</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {mockTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{task.title}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{task.assignedTo || "-"}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{task.dueDate || "-"}</td>
                <td className="px-4 py-3">{getStatusBadge(task.status)}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{task.description || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {mockTasks.length === 0 && (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">No tasks found.</div>
        )}
      </div>
    </main>
  );
}