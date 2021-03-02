/** @jsx jsx */
import { Heading, jsx, Link as TLink } from 'theme-ui'
import { Box, Flex } from '@theme-ui/components'
import kebabCase from 'lodash.kebabcase'
import { Link } from 'gatsby'
import Layout from './layout'
import useBlogConfig from '../hooks/use-blog-config'
import SEO from './seo'
import replaceSlashes from '../utils/replace-slashes'

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useBlogConfig()

  return (
    <Layout>
      <SEO title="Tags" />
      <Heading as="h1" variant="styles.h1">
        Tags
      </Heading>
      <Box mt={[4, 5]}>
        {list.map((listItem) => (
          <Flex
            key={listItem.fieldValue}
            mb={[1, 1, 2]}
            sx={{ alignItems: `center` }}
          >
            <TLink
              as={Link}
              sx={{ variant: `links.listItem`, mr: 2 }}
              to={replaceSlashes(
                `/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`,
              )}
            >
              {listItem.fieldValue}{' '}
              <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </TLink>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Tags
