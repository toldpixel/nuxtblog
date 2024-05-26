<script setup lang="ts">
import { computed } from 'vue';
import { useColorMode } from '#imports'; // Assuming you have the correct import

// Define the type for color modes
type Mode = 'system' | 'light' | 'dark';

// Define the icons associated with each mode
const nextModeIcons: Record<Mode, string> = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
};

const showNextModeLabel = ref(false)

// List of modes for navigation
const modes: Mode[] = ['system', 'light', 'dark'];

const colorMode = useColorMode();

// Computed property to find the next mode
const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference as Mode);
  const nextModeIndex = currentModeIndex + 1 === modes.length ? 0 : currentModeIndex + 1;
  return modes[nextModeIndex];
});

// Function to toggle the color mode
const toggleMode = () => { colorMode.preference = nextMode.value };

// Computed property to get the icon for the next mode
const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);
</script>

<template>
    <div class="flex space-x-2 items-center">
        <div class="text-gray-500 text-xs" v-if="showNextModeLabel">Change to  {{ nextMode }}</div>
        <button @click="toggleMode" 
        @mouseenter="showNextModeLabel = true" 
        @mouseleave="showNextModeLabel = false"
        class="hover:bg-gray-100 dark:hover:bg-gray-600 px-2 py-1 text-gray-500">{{ nextModeIcon }}</button>

    </div>
</template>
