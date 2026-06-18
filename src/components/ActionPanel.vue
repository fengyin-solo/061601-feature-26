<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import gameConfig from '../config/gameConfig'

const emit = defineEmits<{
  (e: 'open-gift'): void
}>()

const gameStore = useGameStore()

const canPerformAction = computed(() => gameStore.actionsRemaining > 0)

const hasSelectedCharacter = computed(() => gameStore.selectedCharacterId !== null)

function doChat() {
  if (!hasSelectedCharacter.value || !canPerformAction.value) return
  gameStore.performAction('chat', gameStore.selectedCharacterId!)
}

function doWork() {
  if (!canPerformAction.value) return
  gameStore.performAction('work')
}

function doRest() {
  gameStore.saveHistory()
  gameStore.advanceTime()
}

function doEndDay() {
  gameStore.endDay()
}
</script>

<template>
  <div class="action-panel card">
    <h2 class="panel-title">
      <span class="title-icon">🎯</span>
      行动
    </h2>

    <div class="action-grid">
      <button 
        class="action-btn chat"
        :disabled="!hasSelectedCharacter || !canPerformAction"
        @click="doChat"
      >
        <span class="action-icon">💬</span>
        <span class="action-name">聊天</span>
        <span class="action-desc">和角色聊天增进感情</span>
        <span class="action-cost">消耗 1 行动力</span>
      </button>

      <button 
        class="action-btn gift"
        :disabled="!hasSelectedCharacter || !canPerformAction"
        @click="emit('open-gift')"
      >
        <span class="action-icon">🎁</span>
        <span class="action-name">送礼</span>
        <span class="action-desc">送礼物给喜欢的人</span>
        <span class="action-cost">消耗 1 行动力</span>
      </button>

      <button 
        class="action-btn work"
        :disabled="!canPerformAction"
        @click="doWork"
      >
        <span class="action-icon">💼</span>
        <span class="action-name">打工</span>
        <span class="action-desc">努力工作赚取代币</span>
        <span class="action-cost">消耗 2 行动力</span>
      </button>

      <button 
        class="action-btn rest"
        @click="doRest"
      >
        <span class="action-icon">☕</span>
        <span class="action-name">小憩</span>
        <span class="action-desc">休息一下，推进时间</span>
        <span class="action-cost free">不消耗行动力</span>
      </button>

      <button 
        class="action-btn sleep"
        @click="doEndDay"
      >
        <span class="action-icon">😴</span>
        <span class="action-name">睡觉</span>
        <span class="action-desc">结束今天，迎接明天</span>
        <span class="action-cost free">触发连锁结果</span>
      </button>
    </div>

    <div v-if="!hasSelectedCharacter" class="hint">
      💡 请先选择一个角色进行互动
    </div>

    <div v-if="!canPerformAction" class="hint info">
      ⏰ 行动力已用完，试试「小憩」或「睡觉」推进时间吧~
    </div>
  </div>
</template>

<style scoped>
.action-panel {
  padding: 20px;
}

.panel-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  font-size: 22px;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 20px 12px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
  transition: all 0.2s;
}

.action-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px var(--shadow-color);
}

.action-btn.chat:hover:not(:disabled) {
  background: #dbeafe;
}

.action-btn.gift:hover:not(:disabled) {
  background: #fce7f3;
}

.action-btn.work:hover:not(:disabled) {
  background: #dcfce7;
}

.action-btn.rest:hover:not(:disabled) {
  background: #fef3c7;
}

.action-btn.sleep:hover:not(:disabled) {
  background: #e0e7ff;
}

.action-icon {
  font-size: 32px;
}

.action-name {
  font-weight: 600;
  font-size: 15px;
}

.action-desc {
  font-size: 12px;
  color: var(--text-secondary);
  text-align: center;
}

.action-cost {
  font-size: 11px;
  color: var(--text-muted);
  background: var(--bg-secondary);
  padding: 2px 8px;
  border-radius: 9999px;
}

.action-cost.free {
  background: #d1fae5;
  color: #065f46;
}

.hint {
  margin-top: 12px;
  padding: 10px 14px;
  background: #fef3c7;
  color: #92400e;
  border-radius: var(--radius-sm);
  font-size: 13px;
}

.hint.warning {
  background: #fee2e2;
  color: #991b1b;
}

.hint.info {
  background: #dbeafe;
  color: #1e40af;
}

@media (max-width: 600px) {
  .action-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
