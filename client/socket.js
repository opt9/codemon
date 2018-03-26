import io from 'socket.io-client'
import store, {triggerModal} from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!', socket.id)
})

socket.on('my message', (msg) => {
  console.log('Time to Battle!')
  // alert(msg)
  store.dispatch(triggerModal())
})

export default socket
 