import Link from "next/link";
import { materials } from "@/lib/mock";

export default function AdminProductsPage() {
  return (
    <main style={{ display: "grid", gap: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>商品管理</h1>
        <Link
          href="/admin/products/new"
          style={{ border: "1px solid #ccc", padding: "8px 12px", borderRadius: 8 }}
        >
          新增商品
        </Link>
      </header>

      <table
        border={1}
        cellPadding={10}
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>商品名</th>
            <th>价格</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>¥{item.price.toFixed(2)}</td>
              <td>{item.status}</td>
              <td>
                <Link
                  href={`/admin/products/${item.id}`}
                  style={{ border: "1px solid #ccc", padding: "4px 8px", borderRadius: 6 }}
                >
                  编辑
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
