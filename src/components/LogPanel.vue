<script setup lang="ts">
import { ref, watch, nextTick, computed } from 'vue'
import { useGameStore } from '../stores/gameStore'
import gameConfig from '../config/gameConfig'
import { getTimeLabel } from '../utils/gameUtils'

const gameStore = useGameStore()
const logContainer = ref<HTMLElement | null>(null)

const reversedLogs = computed(() => [...gameStore.logs].reverse())

function getCharacterName(characterId?: string): string {
  if (!characterId) return ''
  const char = gameConfig.characters.find(c => c.id === characterId)
  return char?.name || ''
}

function getEventTitle(eventId?: string): string {
  if (!eventId) return ''
  const event = gameConfig.events.find(e => e.id === eventId)
  return event?.title || ''
}

function getLogTypeClass(type: string, isDelayedResult?: boolean): string {
  if (isDelayedResult) {
    return 'log-delayed-result'
  }
  const classes: Record<string, string> = {
    action: 'log-action',
    event: 'log-event',
    system: 'log-system',
    story: 'log-story'
  }
  return classes[type] || ''
}

function getLogTypeIcon(type: string, isDelayedResult?: boolean): string {
  if (isDelayedResult) {
    return '🔗'
  }
  const icons: Record<string, string> = {
    action: '🎯',
    event: '📖',
    system: '💻',
    story: '📝'
  }
  return icons[type] || '•'
}

function formatLinkedEvent(log: any): string {
  if (!log.linkedEventId) return ''
  const title = getEventTitle(log.linkedEventId)
  return title ? `「${title}」的后续` : ''
}

watch(() => gameStore.logs.length, async () => {
  await nextTick()
  if (logContainer.value) {
    logContainer.value.scrollTop = logContainer.value.scrollHeight
  }
})
</script>

<template>
  <div class="log-panel card">
    <h2 class="panel-title">
      <span class="title-icon">📜</span>
      游戏日志
    </h2>

    <div class="log-container scrollbar-thin" ref="logContainer">
      <div 
        v-for="log in gameStore.logs" 
        :key="log.id" 
        class="log-item"
        :class="getLogTypeClass(log.type, log.isDelayedResult)"
      >
        <div class="log-header">
          <span class="log-time">
            第{{ log.day }}天 {{ getTimeLabel(log.time) }}
          </span>
          <span class="log-tags">
            <span v-if="log.isDelayedResult" class="log-tag delayed-tag" :title="formatLinkedEvent(log)">
              🔗 连锁结果
              <span v-if="log.linkedEventId" class="tag-source">{{ getEventTitle(log.linkedEventId) }}</span>
            </span>
            <span v-if="log.characterId" class="log-character">
              {{ getCharacterName(log.characterId) }}
            </span>
          </span>
        </div>
        <div class="log-content">
          <span class="log-icon">{{ getLogTypeIcon(log.type, log.isDelayedResult) }}</span>
          <span class="log-message">{{ log.message }}</span>
        </div>
      </div>

      <div v-if="gameStore.logs.length === 0" class="empty-log">
        暂无日志记录
      </div>
    </div>

    <div v-if="gameStore.pendingDelayedResults.length > 0" class="pending-hint">
      <span class="pending-icon">⏳</span>
      <span>还有 {{ gameStore.pendingDelayedResults.length }} 个连锁结果等待触发</span>
    </div>
  </div>
</template>

<style scoped>
.log-panel {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  min-height: 400px;
}

.panel-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.title-icon {
  font-size: 22px;
}

.log-container {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 8px;
}

.log-item {
  padding: 10px 12px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--border-color);
  animation: fadeIn 0.3s ease-out;
}

.log-action {
  border-left-color: #3b82f6;
}

.log-event {
  border-left-color: #8b5cf6;
  background: #faf5ff;
}

[data-theme='dark'] .log-event {
  background: #3b0764;
}

.log-system {
  border-left-color: #6b7280;
  background: #f9fafb;
}

[data-theme='dark'] .log-system {
  background: #1f2937;
}

.log-story {
  border-left-color: #f59e0b;
  background: #fffbeb;
}

[data-theme='dark'] .log-story {
  background: #451a03;
}

.log-delayed-result {
  border-left-color: #14b8a6;
  background: #f0fdfa;
  position: relative;
}

[data-theme='dark'] .log-delayed-result {
  background: #0f766e;
}

.log-delayed-result::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 16px;
  width: 2px;
  height: 8px;
  background: #14b8a6;
}

.log-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  flex-wrap: wrap;
  gap: 4px;
}

.log-time {
  font-size: 11px;
  color: var(--text-muted);
}

.log-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  align-items: center;
}

.log-tag {
  font-size: 10px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.delayed-tag {
  background: #ccfbf1;
  color: #0f766e;
  border: 1px solid #5eead4;
}

[data-theme='dark'] .delayed-tag {
  background: #134e4a;
  color: #5eead4;
  border-color: #14b8a6;
}

.tag-source {
  font-size: 9px;
  opacity: 0.8;
  padding-left: 4px;
  border-left: 1px solid rgba(20, 184, 166, 0.3);
  margin-left: 2px;
}

.log-character {
  font-size: 11px;
  font-weight: 500;
  color: var(--accent-primary);
  background: var(--accent-light);
  padding: 1px 6px;
  border-radius: 4px;
}

.log-content {
  display: flex;
  gap: 6px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-primary);
}

.log-icon {
  flex-shrink: 0;
}

.log-message {
  word-break: break-word;
}

.empty-log {
  text-align: center;
  color: var(--text-muted);
  padding: 40px 0;
  font-size: 14px;
}

.pending-hint {
  margin-top: 10px;
  padding: 8px 12px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: var(--radius-sm);
  font-size: 12px;
  color: #92400e;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

[data-theme='dark'] .pending-hint {
  background: linear-gradient(135deg, #78350f 0%, #92400e 100%);
  color: #fde68a;
}

.pending-icon {
  font-size: 14px;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
