import { notFound } from "next/navigation";
import ProductForm from "../product-form";
import { materials } from "@/lib/mock";

export default function AdminProductEditPage({
  params,
}: {
  params: { id: string };
}) {
  const product = materials.find((m) => m.id === params.id);
  if (!product) return notFound();
  return <ProductForm mode="edit" product={product as any} />;
}
