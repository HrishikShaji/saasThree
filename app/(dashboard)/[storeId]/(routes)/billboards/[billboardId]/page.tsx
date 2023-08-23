import BillboardForm from "@/components/BillboardForm";
import prismadb from "@/lib/prismadb";
import React from "react";

const page = async ({ params }: { params: { billboardId: string } }) => {
  const billboard =
    params.billboardId === "new"
      ? null
      : await prismadb.billboard.findUnique({
          where: {
            id: params.billboardId,
          },
        });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default page;
