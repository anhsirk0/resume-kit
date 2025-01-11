<script>
  import { fade, scale } from "svelte/transition";
  import { projects, appDetails } from "../../info";
  import OnMount from "../../components/OnMount.svelte";
  import Blob from "../../components/Blob.svelte";
  import { ArrowSquareOut, Mountains, GithubLogo } from "phosphor-svelte";

  const toLangTitle = (lang) => {
    let str = lang.replace(".png", "");
    return (
      "written in " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
</script>

<svelte:head>
  <title>Projects • {appDetails.title}</title>
</svelte:head>

<OnMount>
  <!-- Top-left blobs -->
  <Blob
    class="top-[30vh] -left-8 size-72 bg-accent/60 animation-delay-4000 -z-10"
  />
  <Blob class="top-[26vh] left-20 size-72 bg-secondary/60 -z-10" />
  <Blob
    class="top-[32vh] left-48 size-72 bg-primary/60 animation-delay-2000 -z-10"
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
    class="grid grid-cols-6 gap-4 lg:gap-6 2xl:gap-8 w-full mt-20 min-h-0 h-[94vh] lg:h-[90vh] xl:h-[85vh] overflow-y-auto z-10 p-4 pb-8"
  >
    {#each projects as project, idx (project.title)}
      <div
        in:fade={{ delay: (idx + 1) * 150 + 200 }}
        class="card bg-base-100 shadow-xl col-span-6 md:col-span-2 2xl:col-span-2 border border-base-300/50 rounded-2xl"
      >
        <div class="card-body p-4 lg:p-6 2xl:p-8">
          <div class="flex flex-row gap-4 mb-1 xl:mb-2">
            <p class="text-lg md:text-xl 2xl:text-2xl font-bold">
              {project.title}
            </p>
            {#if project.lang.includes("png")}
              <img
                class="h-7 2xl:h-10 border-1 border-base-content/25 p-0.5 2xl:p-1 rounded-xl"
                title={toLangTitle(project.lang)}
                alt={project.title}
                src={"/" + project.lang}
              />
            {:else}
              <span
                title={toLangTitle(project.lang)}
                class="h-7 w-7 2xl:h-10 2xl:w-10 border-1 border-base-content/25 text-lg 2xl:text-2xl text-secondary-content rounded-xl flex items-center justify-center"
              >
                {project.lang[0]}
              </span>
            {/if}
          </div>
          <p class="2xl:text-xl">
            {project.desc}
          </p>
          <div class="ml-auto flex items-center flex-row gap-4">
            <div class="grow"></div>

            {#if project.url}
              <a
                in:scale={{ delay: (idx + 1) * 100 + 400 }}
                class="btn btn-square"
                href={project.url}
                target="_blank"
                aria-label={"View live version at " + project.url}
              >
                <ArrowSquareOut class="size-6" />
              </a>
            {/if}
            {#if project.codeberg}
              <a
                in:scale={{
                  delay: (idx + 1) * 100 + (project.url ? 600 : 400),
                }}
                href={project.src}
                target="_blank"
                class="btn btn-square"
                aria-label={"View source code on codeberg " + project.codeberg}
              >
                <Mountains class="size-6" />
              </a>
            {/if}
            {#if project.github}
              <a
                in:scale={{
                  delay:
                    (idx + 1) * 100 +
                    (project.url ? 600 : 400) +
                    (project.src ? 200 : 0),
                }}
                href={project.github}
                target="_blank"
                aria-label={"View source code on github " + project.github}
                class="btn btn-square"
              >
                <GithubLogo class="size-6" />
              </a>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div></OnMount
>
