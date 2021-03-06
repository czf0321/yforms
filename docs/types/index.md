---
title: 基础类型
nav:
  title: Type
  order: 4
---

# 基础类型

## 用例

<code src="./demo/index.tsx" />

## API

| 参数   | 说明             | 类型          | 默认值 |
| ------ | ---------------- | ------------- | ------ |
| format | 提交前格式化数据 | (value?:T)=>T | -      |

### 共同的 API

- 以下 API 为 `checkboxGroup` `radio` `select` 共享的 API。

### componentProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 数据源，说明[见下](#options) | Array | - |
| showField | 默认显示字段（为 `function` 则为返回值） | string \| ((record: T, index: number) => React.ReactNode) | id |
| postField | 默认提交字段（为 `function` 则为返回值） | string \| ((record: T, index: number) => React.ReactNode) | name |
| renderOption | 自定义显示内容 | (item: any) => any | - |
| onAddProps | 对每一项追加参数 | (item: T, index: number) => { disabled?: boolean; [key: string]: React.ReactNode } | - |

### options

- `id` `name` 为默认字段，可以使用 `showField` `postField` 修改默认字段。

| 参数     | 说明     | 类型            | 默认值 |
| -------- | -------- | --------------- | ------ |
| id       | 提交字段 | React.ReactNode | -      |
| name     | 显示字段 | React.ReactNode | -      |
| disabled | 禁用当前 | boolean         | -      |
