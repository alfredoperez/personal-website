/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Title from '../components/title'
import Listing from '../components/listing'
import useBlogConfig from '../hooks/use-blog-config'
import useSiteMetadata from '../hooks/use-site-metadata'
import replaceSlashes from '../utils/replace-slashes'
import { visuallyHidden } from '../styles/utils'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { NoteEntity } from '../models/note.entity'
import HeroContent from '../components/hero-content'

type HomePageProps = {
  data: {
    allNote: { nodes: Array<NoteEntity> }
    allMoc: { nodes: Array<NoteEntity> }
  }
  [key: string]: unknown
}

const HomePage = (props: HomePageProps) => {
  const { basePath, digitalGardenPath } = useBlogConfig()
  const { siteTitle } = useSiteMetadata()

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!props.data) {
    return null
  }

  const {
    data: {
      allNote: { nodes: notes },
      allMoc: { nodes: mocs },
    },
  } = props
  return (
    <React.Fragment>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mb: [3, 4, 6],
          p: { fontSize: [1, 2, 3], mt: 2 },
        }}
      >
        <HeroContent />
      </section>
      <Title text="Latest Notes">
        <Link to={replaceSlashes(`/${basePath}/${digitalGardenPath}`)}>View All</Link>
      </Title>
      <Listing notes={notes} showTags={true} />
      <Title text="Maps of content" />
      <Listing mocs={mocs} showTags={false} />
    </React.Fragment>
  )
}

export default HomePage
