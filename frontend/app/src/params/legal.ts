import type { ParamMatcher } from '@sveltejs/kit';
import { legalPages } from '$lib/services/legal.service';

export const match: ParamMatcher = (param) => legalPages.includes(param);
