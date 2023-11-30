"use client";

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { db, storage } from "@/firebase";
import { deleteObject, ref } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

export function DeleteModal() {
  const { user } = useUser();

  const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] =
    useAppStore((state) => [
      state.isDeleteModalOpen,
      state.setIsDeleteModalOpen,
      state.fileId,
      state.setFileId,
    ]);

  async function deleteFile() {
    if (!user || !fileId) return;

    // Toast
    const toastId = toast.loading("Deleting...");

    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);

    try {
      await deleteObject(fileRef);
      await deleteDoc(doc(db, "users", user.id, "files", fileId));
      console.log("Deleted!");
      toast.success("Deleted Successfully!", {
        id: toastId,
      });
    } catch (error) {
      console.log(error);
    }
    setIsDeleteModalOpen(false);
  }

  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure want to delete this?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This file will be permanently deleted!
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex space-x-2 py-3">
          <Button
            size="sm"
            className="w-full px-3"
            variant={"ghost"}
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className="sr-only ">Cancel</span>
            <span>Cancel</span>
          </Button>
          <Button
            className="w-full px-3"
            type="submit"
            variant={"destructive"}
            size="sm"
            onClick={() => deleteFile()}
          >
            <span className="sr-only">Delete</span>
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
