export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f90366573199e4cbf2df64b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pw5tz8ig',
                  apiId: '1f4530e9-1bfc-4b8a-b2db-a55faff4e0a8'
                },
                {
                  buildHookId: '5f9036657629115417620b64',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3aaabswg',
                  apiId: '13855728-d22b-4545-b750-8398ff67aab2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/agocsbence/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3aaabswg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
