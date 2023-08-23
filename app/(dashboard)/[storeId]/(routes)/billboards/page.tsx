import { BillboardClient } from "@/components/client";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default page;
