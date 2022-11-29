import firebase from 'firebase/compat/app'
import { makeAutoObservable } from 'mobx'

class Auth {
  auth = firebase.auth()
  firestore = firebase.firestore()

  constructor() {
    makeAutoObservable(this)
  }

  static login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { user } = this.auth.signInWithPopup(provider)
    console.log(user)
  }
}

export default Auth