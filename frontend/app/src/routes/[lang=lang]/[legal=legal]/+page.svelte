<script lang="ts">
  import Seo from '$lib/components/core/SEO.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Seo title={data.title} description={data.description} keywords="privacy,contact,data protection,security" />

<div>{@html data.content}</div>
