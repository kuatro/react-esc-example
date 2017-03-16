/**
 * Created by tycho on 31/01/2017.
 */

import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'

const SOCKET_IO_URL = 'http://socket.io.server/ws'
const socket = io(`${SOCKET_IO_URL}/notifications?token=123456`)
const socketIOMiddleware = createSocketIoMiddleware(socket)

export const middlewares = () => [
  socketIOMiddleware
]

export default middlewares
