"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
        const statusOptions = ["pending", "active", "completed", "overdue"] as const;

export function LatestPost() {
  // Fetch the latest post (or Todo)
  //const { data: latestPost } = api.todo.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  
  // State for the form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState<"completed" | "pending" | "active" | "overdue">("pending");

  // Mutate to create a new Todo
  const createTodo = api.todo.create.useMutation({
    onSuccess: async () => {
      await utils.todo.invalidate();  // Invalidate to refetch the latest data
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setStatus("pending");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <div>
          <p className="truncate">Your most recent Todo: {latestPost.title}</p>
          <p className="truncate">Description: {latestPost.description}</p>
          <p className="truncate">Status: {latestPost.status}</p>
        </div>
      ) : (
        <p>You have no Todos yet.</p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo.mutate({
            title,
            description,
            startDate,
            endDate,
            status,
          });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg px-4 py-2 text-black"
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />

<select
  value={status}
  onChange={(e) => setStatus(e.target.value as (typeof statusOptions)[number])}
  className="w-full rounded-full px-4 py-2 text-black"
>
  {statusOptions.map((option) => (
    <option key={option} value={option}>
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </option>
  ))}
</select>

        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createTodo.isPending}
        >
          {createTodo.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
