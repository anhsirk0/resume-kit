<script>
  import { onMount } from "svelte";
  import { getTheme, setTheme } from "$lib";
  import themes from "../themes";
  import { Sparkle } from "phosphor-svelte";

  let currentTheme = "cupcake";
  let changeTheme = (theme) => {
    currentTheme = theme;
    setTheme(theme);
  };

  onMount(() => {
    currentTheme = getTheme();
    setTheme(currentTheme);
  });
</script>

<div
  class="fixed top-0 -right-[13rem] group-has-[#theme-btn:focus]:right-0 group-has-[#theme-container>*:focus]:right-0 z-50 w-fit transitional h-full"
>
  <ul
    id="theme-container"
    tabIndex="0"
    class="flex flex-col gap-2 w-[13rem] p-2 min-h-0 h-full overflow-y-auto bg-accent"
  >
    {#each themes as theme}
      <li
        tabIndex="0"
        class="btn w-full justify-between relative"
        data-theme={theme}
        on:click={() => changeTheme(theme)}
      >
        {#if currentTheme === theme}
          <Sparkle
            class="size-4 absolute top-1 left-1 animate-grow"
            weight="fill"
          />
        {/if}
        {theme}
        <div
          class="flex flex-row gap-1 rounded-btn [&>div]:h-6 [&>div]:w-2 [&>div]:rounded-box"
        >
          <div class="bg-primary"></div>
          <div class="bg-accent"></div>
          <div class="bg-secondary"></div>
          <div class="bg-neutral"></div>
        </div>
      </li>
    {/each}
  </ul>
</div>
