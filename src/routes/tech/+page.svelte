<script>
  import { fade } from "svelte/transition";
  import { backend, frontend, languages, tools, appDetails } from "../../info";
  import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-svelte";
  import TechCard from "../../components/TechCard.svelte";
  import OnMount from "../../components/OnMount.svelte";
  import Blob from "../../components/Blob.svelte";
</script>

<svelte:head>
  <title>Tech Stack • {appDetails.title}</title>
</svelte:head>

<OnMount>
  <!-- Top-left blobs -->
  <Blob
    class="top-[20vh] -left-8 size-72 bg-accent/60 animation-delay-4000 -z-10"
  />
  <Blob class="top-[26vh] left-20 size-72 bg-secondary/60 -z-10" />
  <Blob
    class="top-[22vh] left-48 size-72 bg-primary/60 animation-delay-2000 -z-10"
  />
  <!-- Bottom-right blobs -->
  <Blob
    class="top-[60vh] -right-8 size-72 bg-primary/60 animation-delay-4000 -z-10"
  />
  <Blob class="top-[56vh] right-20 size-72 bg-accent/60 -z-10" />
  <Blob
    class="top-[62vh] right-48 size-72 bg-secondary/60 animation-delay-2000 -z-10"
  />

  <div
    in:fade
    class="grid grid-cols-12 gap-4 lg:gap-6 2xl:gap-8 w-full mt-20 min-h-0 h-[94vh] lg:h-[90vh] xl:h-[85vh] overflow-y-auto p-4 pb-8"
  >
    <div
      class="col-span-12 xl:col-span-7 flex flex-col gap-4 lg:gap-6 2xl:gap-8"
    >
      <TechCard title="Languages" items={languages} />
      <TechCard title="Web frontend" items={frontend} delay={100} />
    </div>
    <div class="col-span-12 xl:col-span-5 grid gap-4 lg:gap-6 2xl:gap-8">
      <TechCard title="Web backend" items={backend} delay={200} />
      <TechCard title="Tools" items={tools} delay={300} />
    </div>
  </div>
</OnMount>
