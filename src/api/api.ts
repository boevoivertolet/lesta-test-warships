import { Vehicle } from './../redux/appReducer'
import { GraphQLClient } from 'graphql-request'

const url = 'https://vortex.korabli.su/api/graphql/glossary'
const graphQLClient = new GraphQLClient(url)

export const api = {
      async getVehicles(): Promise<{ vehicles: Vehicle[] }> {
            const query = `{
        vehicles {
          title
          description
          icons {
            large
            medium
          }
          level
          type {
            name
            title
            icons {
              default
            }
          }
          nation {
            name
            title
            color
            icons {
              small
              medium
              large
            }
          }
        }
      }`

            return await graphQLClient.request(query)
      },
}
