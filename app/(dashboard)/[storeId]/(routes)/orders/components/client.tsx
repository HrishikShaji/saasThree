"use client";

import { Plus } from "lucide-react";
import Heading from "../../../../../../components/ui/Heading";
import { Button } from "../../../../../../components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";
import { BillboardColumn } from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import { Separator } from "../../../../../../components/ui/separator";
import { DataTable } from "../../../../../../components/ui/data-table";
import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data?.length})`}
        description="Manage Orders for your store"
      />

      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};
