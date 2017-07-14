import ZAFClient from 'zendesk_app_framework_sdk'

const client = ZAFClient.init()

export const ticketId = () => {
  return client.context().then(context => {
    return context.ticketId
  })
}

export const proxyRequest = (options) => {
  return client.request(options)
}

export const getTicket = () => {
  return client.get('ticket')
}

export const currentUser = () => client.get('currentUser')