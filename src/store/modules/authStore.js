import db from "../../firebase/firebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "vue-router";

const auth = getAuth(db);

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

          commit("setUser", {
            data: profile,
            token: accessToken,
          });

          const firestore = db.firestore();
          const usersCollection = firestore.collection("users");
          console.log(
            "🚀 ~ file: authStore.js:61 ~ returnnewPromise ~ usersCollection:",
            usersCollection
          );

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
