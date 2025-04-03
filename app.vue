<script setup lang="ts">
  const defaultDate = new Date();

  const toDateTimeLocal = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  const dateTime = ref(toDateTimeLocal(defaultDate));
  const format: string = ref("");

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const toFormat = (format: string) => {
    const value: Date = new Date(dateTime.value);
    switch(format) {
      case "f":
        return `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`;
      case "F":
        return value.toString();
      case "t":
        return value.toLocaleTimeString();
      case "T":
        return value.toTimeString();
      case "d":
        return value.toLocaleDateString();
      case "D":
        return value.toDateString();
      case "R":
        return "X seconds ago";

    }
  }

  const toMarkdown = () => {
    const timestamp = new Date(dateTime.value) / 1000;
    return `<t:${timestamp}:${format.value}>`;
  }
</script>

<template>
  <div>
    <main>
      <div class="hero bg-base-300 min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <fieldset class="fieldset">
              <legend class="fieldset-legend">Create a Discord timestamp</legend>

              <legend class="fieldset-label">Pick a date and time</legend>
              <input v-model="dateTime" type="datetime-local" class="input input-md">

              <legend class="fieldset-label">Choose a format</legend>
              <select v-model="format" class="select select-md">
                <option disabled value="">Select a format</option>
                <option value="f">Short date & time ({{ toFormat("f") }})</option>
                <option value="F">Long date & time ({{ toFormat("F") }})</option>
                <option value="d">Short date ({{ toFormat("d") }})</option>
                <option value="D">Long date ({{ toFormat("D") }})</option>
                <option value="t">Short time ({{ toFormat("t") }})</option>
                <option value="T">Long time ({{ toFormat("T") }})</option>
                <option value="R">Relative ({{ toFormat("R") }})</option>
              </select>
            </fieldset>

            <div v-if="dateTime && format" class="py-4">
              <span class="text-xs px-2">Click to copy</span>
              <code class="cursor-pointer" @click="copyToClipboard(toMarkdown())">
                {{ toMarkdown() }}
              </code>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 absolute bottom-0">
      <aside class="grid-flow-col items-center">
        <p>Created by @SapphSky</p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/SapphSky/TimestampMarkdown?style=for-the-badge">
        <a href="https://github.com/SapphSky/TimestampMarkdown">
          View on GtiHub
        </a>
        <a href="https://ko-fi.com/sapphsky">
          Support on Ko-fi
        </a>
      </nav>
    </footer>
  </div>
</template>