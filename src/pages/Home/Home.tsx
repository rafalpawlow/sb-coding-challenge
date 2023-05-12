import { Fragment } from 'react'

import { useSwaggerJson } from '@/queries/swagger'
import { InfoBlock } from '@/components/InfoBlock'
import Container from '@/components/_layout/Container'
import { HttpMethod } from '@/queries/types/Swagger'
import { MethodDetails } from '@/components/MethodDetails'

import { Endpoint, PathsWrapper } from './Home.styles'

export const Home = () => {
  const { data, isLoading } = useSwaggerJson()

  if (!data || isLoading) {
    return null
  }

  const { info, paths, tags } = data

  // convert paths object to an array
  const mappedPaths = Object.keys(paths).map((path) => ({
    endpoint: path,
    methods: Object.keys(paths[path]).map((method) => ({ name: method, ...paths[path][method as HttpMethod] })),
  }))

  // link paths with appropriate tags
  const tagsWithPaths = tags.map((tag) => {
    const filteredPathsByTag = mappedPaths.filter((path) => path.methods[0].tags.includes(tag.name))
    return { ...tag, paths: filteredPathsByTag }
  })

  return (
    <>
      <InfoBlock
        description={info.description}
        version={info.version}
        title={info.title}
        termsOfService={info.termsOfService}
        contact={info.contact}
        license={info.license}
      />
      <Container>
        {tagsWithPaths.map((tag) => (
          <Fragment key={tag.name}>
            <h2>
              {tag.name} - {tag.description}
            </h2>
            <PathsWrapper>
              {tag.paths.map((path) => (
                <div key={path.endpoint}>
                  <Endpoint>{path.endpoint}</Endpoint>
                  {path.methods.map((method) => (
                    <MethodDetails
                      key={`${path.endpoint}-${method.name}`}
                      name={method.name}
                      parameters={method.parameters}
                      responses={method.responses}
                      deprecated={method.deprecated}
                    />
                  ))}
                </div>
              ))}
            </PathsWrapper>
          </Fragment>
        ))}
      </Container>
    </>
  )
}
