<script>
  import { fade, scale } from "svelte/transition";
  let { items, title, delay } = $props();
</script>

<div in:fade={{ delay }} class="card">
  <div class="card-body p-0">
    <div class="text-xl md:text-2xl 2xl:text-4xl mb-3 xl:mb-4 font-bold">
      <p class="w-fit relative isolate">
        <span class="absolute -bottom-1 left-0 w-[120%] h-4 bg-base-300 -z-10"
        ></span>
        {title}
      </p>
    </div>
    <div class="flex flex-wrap gap-4">
      {#each items as item, idx (item.title)}
        <a
          in:scale={{ delay: (idx + 1) * 100 + 200 + delay }}
          href={item.url}
          target="_blank"
          class="tooltip tooltip-top"
          data-tip={item.title}
        >
          <div
            class="size-20 xl:size-24 2xl:size-28 flex items-center border-1 border-base-content/25 rounded-box p-1 md:p-2"
          >
            <img alt={item.title} src={"/" + item.img} class="rounded-2xl" />
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
