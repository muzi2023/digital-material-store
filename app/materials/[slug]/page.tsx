import Link from 'next/link';
import { notFound } from 'next/navigation';
import { materials } from '@/lib/mock';

export default function MaterialDetailPage({ params }: { params: { slug: string } }) {
  const material = materials.find((item) => item.slug === params.slug);

  if (!material) {
    notFound();
  }

  return (
    <main>
      <section className="panel">
        <span className="badge">商品详情</span>
        <h1>{material.title}</h1>
        <p className="subtle">{material.description}</p>
        <div className="price">¥{(material.price / 100).toFixed(2)}</div>
        <p className="subtle">
          当前页面先展示商品详情，后续你需要把这里接成微信支付下单页。支付成功后，跳转到已购资料页。
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <Link className="button" href="/downloads">
            模拟进入已购资料页
          </Link>
          <Link className="button" href="/admin">
            查看后台结构
          </Link>
        </div>
      </section>
    </main>
  );
}
