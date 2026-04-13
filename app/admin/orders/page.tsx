export default function AdminOrdersPage() {
  return (
    <main style={{ display: 'grid', gap: 16 }}>
      <header>
        <h1>订单管理（演示版）</h1>
        <p>你现在看到的是页面占位，上传/保存/统计后面接通数据库和支付后再上线。</p>
      </header>
      <section style={{ border: '1px dashed #bbb', padding: 16, borderRadius: 12 }}>
        <p>未来这里会展示订单列表、状态筛选、金额汇总。</p>
      </section>
    </main>
  );
}
