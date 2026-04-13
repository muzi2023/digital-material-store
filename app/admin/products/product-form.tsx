"use client";

import Link from "next/link";
import { useState } from "react";

export type AdminProduct = {
  id?: string;
  title: string;
  price: number;
  status: "已上架" | "已下架";
  description: string;
};

export default function ProductForm({
  mode,
  product,
}: {
  mode: "create" | "edit";
  product?: AdminProduct;
}) {
  const [form, setForm] = useState<AdminProduct>({
    id: product?.id,
    title: product?.title || "",
    price: product?.price || 0,
    status: (product?.status as any) || "已上架",
    description: product?.description || "",
  });

  function save() {
    alert(
      `${mode === "create" ? "新增" : "保存修改"}成功，但未接数据库/上传功能`
    );
  }

  return (
    <main style={{ display: "grid", gap: 16 }}>
      <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h1>{mode === "create" ? "新增商品" : "编辑商品"}</h1>
        <Link
          href="/admin/products"
          style={{
            border: "1px solid #ccc",
            padding: "6px 10px",
            borderRadius: 8,
          }}
        >
          返回商品列表
        </Link>
      </header>

      <div style={{ display: "grid", gap: 12, maxWidth: 560 }}>
        <label style={{ display: "grid", gap: 6 }}>
          商品名
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          价格（元）
          <input
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          状态
          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value as any })
            }
          >
            <option value="已上架">已上架</option>
            <option value="已下架">已下架</option>
          </select>
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          商品描述（文案）
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </label>

        <section
          style={{ border: "1px dashed #aaa", borderRadius: 12, padding: 16 }}
        >
          <h2>上传封面图（占位）</h2>
          <p>这里后面接阿里 OSS。现在先别传，接通后我把上传按钮打开。</p>
        </section>

        <section
          style={{ border: "1px dashed #aaa", borderRadius: 12, padding: 16 }}
        >
          <h2>上传资料文件（占位）</h2>
          <p>同样是占位，后面接通后可上传 zip/pdf。</p>
        </section>

        <button
          onClick={save}
          style={{
            background: "black",
            color: "white",
            padding: "10px 14px",
            borderRadius: 12,
          }}
        >
          {mode === "create" ? "新增" : "保存修改"}
        </button>
      </div>
    </main>
  );
}
