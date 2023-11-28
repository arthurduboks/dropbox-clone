import { auth } from "@clerk/nextjs";
import Dropzone from "../components/Dropzone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrap from "../components/table/TableWrap";

async function Dashboard() {
  const { userId } = auth();

  const docRes = await getDocs(collection(db, "users", userId!, "files"));

  const skelFiles: FileType[] = docRes.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadUrl: doc.data().downloadUrl,
    type: doc.data().type,
    size: doc.data().size,
  }));

  return (
    <div className="border-t">
      <Dropzone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrap skelFiles={skelFiles} />
          {/* Table wrapper */}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
