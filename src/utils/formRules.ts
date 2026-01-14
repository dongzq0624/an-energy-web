import type { RuleItem } from 'async-validator'

/**
 * 表单验证规则
 */

/**
 * 必填验证规则
 */
export const required: RuleItem = {
  required: true,
  message: '此项为必填项',
  trigger: 'blur'
}

/**
 * 邮箱验证规则
 */
export const email: RuleItem = {
  type: 'email',
  message: '请输入正确的邮箱地址',
  trigger: 'blur'
}

/**
 * 手机号验证规则
 */
export const phone: RuleItem = {
  pattern: /^1[3-9]\d{9}$/,
  message: '请输入正确的手机号码',
  trigger: 'blur'
}

/**
 * 密码验证规则（至少6位）
 */
export const password: RuleItem = {
  min: 6,
  message: '密码至少为6位',
  trigger: 'blur'
}
