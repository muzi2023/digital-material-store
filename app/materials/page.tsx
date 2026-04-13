import Link from 'next/link';
import { materials } from '@/lib/mock';

export default function MaterialsPage() {
  return (
    <main>
      <section className="panel">
        <h1 className="section-title">全部资料</h1>
        <p className="subtle">适合卖作文模板、预测卷、面试资料、讲义电子版等低价数字商品。</p>
      </section>
      <div style={{ height: 16 }} />
      <section className="grid">
        {materials.map((item) => (
          <article className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p className="subtle">{item.description}</p>
            <div className="price">¥{(item.price / 100).toFixed(2)}</div>
            <Link className="button" href={`/materials/${item.slug}`}>
              进入商品详情
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
