import { mockOrders, mockUsers, materials } from '@/lib/mock';

export default function AdminPage() {
  return (
    <main style={{ display: 'grid', gap: 16 }}>
      <section className="panel">
        <h1 className="section-title">后台总览</h1>
        <p className="subtle">这一页先把你最关心的三个后台能力放出来：商品、订单、用户。</p>
      </section>

      <section className="card">
        <h2 className="section-title">商品管理</h2>
        <table className="table">
          <thead>
            <tr>
              <th>商品名</th>
              <th>价格</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>¥{(item.price / 100).toFixed(2)}</td>
                <td>已上架</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2 className="section-title">订单统计</h2>
        <table className="table">
          <thead>
            <tr>
              <th>订单号</th>
              <th>用户</th>
              <th>商品</th>
              <th>金额</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((item) => (
              <tr key={item.orderNo}>
                <td>{item.orderNo}</td>
                <td>{item.user}</td>
                <td>{item.product}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2 className="section-title">用户管理</h2>
        <table className="table">
          <thead>
            <tr>
              <th>用户</th>
              <th>手机号</th>
              <th>累计支付</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((item) => (
              <tr key={item.phone}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.totalPaid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
