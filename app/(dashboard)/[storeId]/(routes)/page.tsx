import prismadb from "@/lib/prismadb";
import React from "react";

interface Props {
  params: { storeId: string };
}

const page: React.FC<Props> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active Store: {store?.name}</div>;
};

export default page;
