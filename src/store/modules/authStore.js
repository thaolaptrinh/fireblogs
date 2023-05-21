import { firebaseApp, firestore } from "../../firebase/firebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);

export default {
  namespaced: true,
  state: () => ({
    user: {
      data: null,
      token: null,
    },
  }),

  mutations: {
    setUser: (state, payload) => {
      state.user.data = payload.data;
      state.user.token = payload.token;
    },
  },

  actions: {
    async register({ state, commit }, dataForm) {
      return new Promise(async (resolve, reject) => {
        const { email, password, fullName } = dataForm;
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;

          // Get the access token
          const accessToken = await user.getIdToken();

          // Update the user's profile with additional properties
          await updateProfile(user, {
            displayName: fullName,
          });

          // Get the updated profile
          const profile = {
            displayName: user.displayName,
            email: user.email,
            // Add other profile properties as needed
          };

          const database = doc(firestore, "users", user.uid);
          await setDoc(database, {
            displayName: fullName,
            email: email,
          });

          commit("setUser", {
            data: profile,
            token: accessToken,
          });

          if (accessToken) {
            resolve({
              success: true,
              accessToken: accessToken,
            });
          }
        } catch (error) {
          reject(error);
        }
      });
    },
  },
};
