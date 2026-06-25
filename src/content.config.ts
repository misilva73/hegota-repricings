import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per EIP lives in src/content/eips/.
// To add or edit an EIP, just edit/drop a .md file there — no code changes needed.
const eips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eips' }),
  schema: z.object({
    // EIP number, e.g. 8131
    number: z.number(),
    // Short, human title (without the "EIP-XXXX:" prefix)
    title: z.string(),
    // Standardization status, e.g. "Draft"
    status: z.string().default('Draft'),
    // Which bundle this EIP belongs to: the minimal set or the comprehensive proposal
    track: z.enum(['minimal', 'comprehensive']),
    // One-sentence summary shown on cards and detail headers
    summary: z.string(),
    // A few headline takeaways shown as chips on the card
    highlights: z.array(z.string()).default([]),
    // Accent colour for this EIP's card / hero (CSS colour)
    accent: z.string().default('#627eea'),
    // Canonical link (eips.ethereum.org, a PR, etc.)
    specUrl: z.string().url().optional(),
    // Sort order within its track (lower = first)
    order: z.number().default(0),
    // Set true when the content still needs verification against the live spec
    needsReview: z.boolean().default(false),
  }),
});

export const collections = { eips };
