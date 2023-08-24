import BillboardForm from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/components/BillboardForm";
import prismadb from "@/lib/prismadb";
import React from "react";
import SizeForm from "./components/SizeForm";

const page = async ({ params }: { params: { sizeId: string } }) => {
  const size =
    params.sizeId === "new"
      ? null
      : await prismadb.size.findUnique({
          where: {
            id: params.sizeId,
          },
        });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default page;
