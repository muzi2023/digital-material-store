# Digital Material Store

一个面向电子资料售卖的轻量项目骨架，适合教资资料、作文模板、预测卷、电子讲义等数字商品。

## 当前版本包含

- Next.js 14 App Router 项目结构
- 基础前台页面：首页、商品列表、商品详情、已购资料页、下载成功页
- 基础后台页面：商品管理、订单统计、用户管理
- Prisma + SQLite 数据结构草案
- 后续可接入：微信支付、支付宝、对象存储、限时下载链接

## 推荐技术栈

- Next.js 14
- TypeScript
- Prisma
- SQLite（开发期）/ PostgreSQL（正式环境）
- 对象存储（正式环境建议）

## 本项目当前定位

这是第一版项目骨架，重点是把目录结构、页面结构、数据结构先搭起来，方便继续开发。

## 你后面最优先要接的能力

1. 商品后台 CRUD
2. 微信支付 / 支付宝
3. 支付成功后订单入库
4. 已购资料权限校验
5. 下载链接与文件存储

## 本地启动

```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run dev
```

打开：http://localhost:3000
