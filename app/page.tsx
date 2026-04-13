import Link from 'next/link';
import { materials } from '@/lib/mock';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <span className="badge">低价电子资料售卖站</span>
        <h1>把“付款后复制网盘链接”改成“付款后直接下载”</h1>
        <p className="subtle">
          这一版项目聚焦最核心的能力：展示资料、完成收款、校验订单、开放下载权限。
        </p>
        <div style={{ marginTop: 16 }}>
          <Link className="button" href="/materials">
            查看全部资料
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">推荐资料</h2>
        <div className="grid">
          {materials.map((item) => (
            <article className="card" key={item.id}>
              <span className="badge">电子资料</span>
              <h3>{item.title}</h3>
              <p className="subtle">{item.description}</p>
              <div className="price">¥{(item.price / 100).toFixed(2)}</div>
              <Link className="button" href={`/materials/${item.slug}`}>
                查看详情
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
