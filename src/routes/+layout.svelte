<script>
  import "../app.css";
  import { appDetails } from "../info";
  import { List as MenuIcon } from "phosphor-svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<svelte:head>
  <title>{appDetails.title}</title>
</svelte:head>

<div class="bg-base-100 min-h-screen w-screen transitional overflow-hidden">
  <div
    class="max-w-7xl mx-auto size-full min-h-screen flex items-center relative isolate"
  >
    <Navbar />
    <slot />
  </div>
</div>
