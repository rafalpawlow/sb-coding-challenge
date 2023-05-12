export interface Parameter {
  description?: string
  in: string
  name: string
  required: boolean
  type: string
  schema?: Record<string, string>
}

export type Response = Record<number | string, { description: string; schema?: Record<string, string> }>

export interface Method {
  consumes: string[]
  description?: string
  operationId: string
  parameters: Parameter[]
  produces: string[]
  responses: Response
  security: Array<Record<string, string[]>>
  tags: string[]
  summary?: string
  deprecated?: boolean
}

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

type Path = Record<HttpMethod, Method>

interface Tag {
  name: string
  description: string
  externalDocs?: {
    description: string
    url: string
  }
}

export interface Info {
  title: string
  description: string
  version?: string
  termsOfService?: string
  contact?: {
    email: string
  }
  license?: {
    name: string
    url: string
  }
}

export interface Swagger {
  swagger: string
  info: Info
  host: string
  basePath: string
  tags: Tag[]
  schemes: Array<'http' | 'https'>
  paths: Record<string, Path>
}
