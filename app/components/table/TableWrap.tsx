"use client";

import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { columns } from "./Columns";
import { DataTable } from "./Table";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

function TableWrap({ skelFiles }: { skelFiles: FileType[] }) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  return (
    <div>
      <Button onClick={() => setSort(sort === "desc" ? "asc" : "desc")}>
        Sory By {sort === "desc" ? "Newest" : "Oldest"}
      </Button>

      <DataTable columns={columns} data={skelFiles} />
    </div>
  );
}

export default TableWrap;
