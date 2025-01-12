<script>
  import { page } from "$app/stores";
  import { appDetails } from "../info";
  import { House, Stack, Code, Palette } from "phosphor-svelte";
  import Themes from "../components/Themes.svelte";
  import Blob from "../components/Blob.svelte";

  let links = [
    { title: "Home", Icon: House, url: "" },
    { title: "Stack", Icon: Code, url: "tech" },
    { title: "Projects", Icon: Stack, url: "projects" },
  ];
</script>

<div
  class="absolute w-full top-0 lg:top-4 p-2 flex justify-between items-center"
>
  <img
    class="rounded-full size-12 lg:size-16 2xl:size-20 p-2 ring-2 ring-neutral/50"
    alt="logo"
    src={appDetails.logoSrc}
  />

  <div class="center group">
    <Themes />
    <div class="relative isolate">
      <Blob
        class="-top-24 -right-8 size-60 bg-secondary/60 -z-50 animation-delay-4000"
      />
      <Blob class="-top-16 -right-20 size-60 bg-accent/60 -z-50" />
      <Blob
        class="-top-24 right-48 size-60 bg-primary/60 -z-50 animation-delay-2000"
      />
      <ul
        class="menu menu-horizontal menu-xs md:menu-sm xl:menu-md bg-base-100 rounded-full shadow"
      >
        {#each links as link (link.title)}
          <li>
            <a
              class="!rounded-full text-80 active:!bg-base-100 active:!text-base-content"
              href={link.url || "/"}
              class:active={$page.url.pathname === `/${link.url}`}
            >
              <link.Icon class="size-3 lg:size-4 xl:size-5" />
              {link.title}
            </a>
          </li>
        {/each}
        <li>
          <button id="theme-btn" class="!rounded-full center">
            <Palette class="size-4 lg:size-5 xl:size-5" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
