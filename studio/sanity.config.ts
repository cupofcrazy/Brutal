import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { dashboardTool, projectInfoWidget } from '@sanity/dashboard'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { muxInput } from 'sanity-plugin-mux-input'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { schemaTypes } from './schemas'
import { structure } from './desk-structure'
import { Logo } from './components/logo'

const { theme } = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?default=1c1c1c;700;lightest:ffffff;darkest:111111&primary=001111&transparent=e8e8e8'
)) as { theme: import('sanity').StudioTheme }

export default defineConfig({
  name: 'default',
  title: 'Untitled'.toUpperCase(),

  projectId: '1qcsl6ez',
  dataset: 'production',

  plugins: [
    deskTool({ structure }),
    visionTool(),
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Documents',
          types: ['post', 'author', 'category'],
        }),
        projectInfoWidget(),
        vercelWidget(),
      ],
    }),
    media(),
    muxInput(),
    vercelDeployTool,
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  theme: theme,
})
