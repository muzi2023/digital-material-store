import { materials } from '@/lib/mock';

export default function DownloadsPage() {
  return (
    <main>
      <section className="panel">
        <h1 className="section-title">我的已购资料</h1>
        <p className="subtle">正式接入订单系统后，这里只显示当前用户已支付并有权限下载的资料。</p>
      </section>
      <div style={{ height: 16 }} />
      <section className="grid">
        {materials.slice(0, 2).map((item) => (
          <article className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p className="subtle">支付成功后，这里显示真实下载按钮或在线查看入口。</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <span className="button">立即下载</span>
              <span className="button">在线查看</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
