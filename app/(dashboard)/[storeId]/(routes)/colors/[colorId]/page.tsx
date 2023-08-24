import BillboardForm from "@/app/(dashboard)/[storeId]/(routes)/billboards/[billboardId]/components/BillboardForm";
import prismadb from "@/lib/prismadb";
import React from "react";
import SizeForm from "./components/ColorForm";
import ColorForm from "./components/ColorForm";

const page = async ({ params }: { params: { colorId: string } }) => {
  console.log(params.colorId);
  const color =
    params.colorId === "new"
      ? null
      : await prismadb.color.findUnique({
          where: {
            id: params.colorId,
          },
        });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default page;
