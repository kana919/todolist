import Vuex from 'vuex';
import firebase from '@/plugins/firebase';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db } from '~/plugins/firebase.js'

const createStore = () => {
    return new Vuex.Store({
      state: {
        front: [],
      },
      mutations: {
        ...vuexfireMutations
      },
      actions: {
        setUsersRef: firestoreAction(({ bindFirestoreRef }, ref) => {
            bindFirestoreRef('front', ref)
        }),
        updateUsers: firestoreAction(({ bindFirestoreRef },state) =>{
            db.collection('users')
              .doc(state.id)
              .update({ tododata: state.tododata })
              .then(() => {
                console.log(state.id)
              })
        })
      },
      getters: {
        getUsers: (state) => {
          return state.front
        },
      },
    })
  }
  
  export default createStore