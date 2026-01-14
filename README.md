**芋道** - 基于 Vue3 + Element Plus 的企业级中后台管理系统

## 🚀 快速开始

- **演示地址**：<http://dashboard-vue3.yudao.iocoder.cn>
- **启动文档**：<https://doc.iocoder.cn/quick-start/>
- **环境要求**：Node.js 16.18.0+ && pnpm 8.6.0+

### ✨ 核心特性

- 🏗️ **现代化技术栈**：Vue 3.5 + Vite 5 + TypeScript 5
- 🎨 **组件丰富**：60+ 业务组件，拖拽设计器，流程引擎
- 🔐 **权限系统**：RBAC 多租户权限管理
- 🌍 **国际化**：中英文切换，多语言扩展
- 🎯 **开箱即用**：完整的企业级功能模块

## 🛠️ 技术栈

| 框架         | 版本   | 说明                  |
| ------------ | ------ | --------------------- |
| Vue          | 3.5.12 | 渐进式前端框架        |
| Vite         | 5.1.4  | 下一代前端构建工具    |
| Element Plus | 2.11.1 | Vue3 组件库           |
| TypeScript   | 5.3.3  | 类型安全的 JavaScript |
| Pinia        | 2.1.7  | Vue 状态管理          |
| Vue Router   | 4.4.5  | Vue 路由管理          |

## 📁 项目结构

```
src/
├── api/           # API 接口层
├── components/    # 业务组件 (60+)
├── views/         # 页面组件
├── router/        # 路由配置
├── store/         # 状态管理 (Pinia)
├── utils/         # 工具函数
├── locales/       # 国际化
└── styles/        # 样式文件
```

## 🛠️ 开发工具

推荐 VS Code + 以下插件：

- Vue - Official (Vue 开发支持)
- TypeScript Importer (TS 导入)
- Prettier (代码格式化)
- ESLint (代码检查)

## 🏗️ 系统架构

支持 **Spring Boot 单体** 与 **Spring Cloud 微服务** 两种架构

**后端技术栈**：Spring Boot 3.x + MySQL + Redis + Flowable + SkyWalking

## 🎯 核心功能

### 系统管理

- 👥 **用户管理**：用户 CRUD、角色分配、组织架构
- 🔐 **权限管理**：RBAC 权限模型、菜单管理、数据权限
- 📊 **审计日志**：操作日志、登录日志、安全监控

### 基础设施

- ⚙️ **代码生成**：前后端代码自动生成、数据源配置
- 📋 **API 文档**：Swagger 接口文档、数据库文档
- 📁 **文件管理**：多存储方式、文件上传下载
- ⏰ **定时任务**：任务调度、执行日志监控
- 📈 **系统监控**：性能监控、链路追踪、健康检查

### 第三方集成

- 🔗 **OAuth2**：第三方登录集成、多应用 SSO
