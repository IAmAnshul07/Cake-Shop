import { BUY_CAKE } from './cakeType'

export const buyCake = () => {
    console.log('action dispath')
  return {
    type: BUY_CAKE
  }
}
