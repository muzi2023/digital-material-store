export default function AdminUsersPage() {
  return (
    <main style={{ display: 'grid', gap: 16 }}>
      <header>
        <h1>用户管理（演示版）</h1>
        <p>页面占位：未来会有用户列表、搜索、用户订单、累计支付等。</p>
      </header>
      <section style={{ border: '1px dashed #bbb', padding: 16, borderRadius: 12 }}>
        <p>下一步接数据库 + 权限后，这里就能真正看和维护用户了。</p>
      </section>
    </main>
  );
}
