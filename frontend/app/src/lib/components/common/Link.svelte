<script lang="ts">
  import { page } from '$app/stores';

  let className = 'text-secondary-100 before:bg-secondary-100';
  export { className as class };
  export let href: string;
  export let animate = true;
  export let i11n = false;

  const url = `/${i11n ? $page.params.lang : ''}${href === '/' ? '' : href}`;
</script>

<a href={url} class:on={animate} class={className}><slot /></a>

<style>
  a {
    position: relative;
  }

  .on::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .on:hover::before {
    transform: scaleX(1);
  }
</style>
