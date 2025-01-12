<script>
  import { fade } from "svelte/transition";
  import { contacts, appDetails } from "../info";
  import {
    EnvelopeSimple,
    GithubLogo,
    LinkedinLogo,
    Mountains,
    DownloadSimple,
  } from "phosphor-svelte";
  import OnMount from "../components/OnMount.svelte";
  import Blob from "../components/Blob.svelte";
</script>

<svelte:head>
  <title>{appDetails.title}</title>
</svelte:head>

<OnMount>
  <div
    in:fade
    class="flex flex-col gap-4 max-w-2xl p-4 text-center md:text-left"
  >
    <p class="text-5xl xl:text-7xl font-black">Hi!</p>
    <p class="text-lg md:text-xl xl:text-2xl font-bold">
      {appDetails.aboutHeading}
    </p>
    <p class="md:text-lg xl:text-xl">{appDetails.aboutDescription}</p>
    <a
      href="resume.pdf"
      class="btn btn-outline ml-auto md:ml-0 mr-auto z-10"
      download={appDetails.name.replaceAll(" ", "_") + "_Resume"}
    >
      <DownloadSimple class="size-6" /> Download Resume
    </a>
    <!-- <div class="divider"></div> -->
    <div class="flex gap-4 mt-8 relative self-center md:self-start isolate">
      <Blob
        class="-top-36 -left-8 size-72 bg-accent/60 animation-delay-4000 -z-10"
      />
      <Blob class="-top-16 left-20 size-72 bg-secondary/60 -z-10" />
      <Blob
        class="-top-36 left-48 size-72 bg-primary/60 animation-delay-2000 -z-10"
      />
      <a href={contacts.mail} target="_blank" class="btn btn-primary">
        Contact <EnvelopeSimple class="size-6" />
      </a>
      {#if contacts.codeberg}
        <a
          href={contacts.codeberg}
          target="_blank"
          class="btn btn-square btn-outline"
        >
          <Mountains class="size-6" />
        </a>
      {/if}
      {#if contacts.github}
        <a
          href={contacts.github}
          target="_blank"
          class="btn btn-square btn-outline"
        >
          <GithubLogo class="size-6" />
        </a>
      {/if}
      {#if contacts.linkedin}
        <a
          href={contacts.linkedin}
          target="_blank"
          class="btn btn-square btn-outline"
        >
          <LinkedinLogo class="size-6" />
        </a>
      {/if}
    </div>
  </div>
</OnMount>
