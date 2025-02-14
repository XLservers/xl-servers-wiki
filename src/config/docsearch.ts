import type { DocSearchClientOptions } from '@astrojs/starlight-docsearch';

export default {
    appId: 'KXQEIP6432',
    apiKey: '687a2935e78b326c4f6f0d347a37336d',
    indexName: 'yep',
    getMissingResultsUrl({ query }) {
        return `https://github.com/algolia/docsearch/issues/new?title=${query}`;
    },
    // ...
} satisfies DocSearchClientOptions;