export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f3bd07bbcbecd010c0cefa7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cgnm567x',
                  apiId: '824a3969-423c-48a5-9e58-a902a6c2ea24'
                },
                {
                  buildHookId: '5f3bd07bfb9f4b0105e39eda',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dqcgj48b',
                  apiId: '5a6435ab-dd8d-4be1-b66a-dd1b6b6c958b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spacedawwwg/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dqcgj48b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
