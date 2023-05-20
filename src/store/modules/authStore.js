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
    error: false,
    errorMsg: "",
  }),

  mutations: {
    setUser: (state, payload) => {
      state.user.data = payload.data;
      state.user.token = payload.token;
    },
  },

  actions: {
    async register({ state, commit }, dataForm) {
      const { email, password, fullName } = dataForm;

      if (email == "" || password == "" || fullName == "") {
        state.error = true;
        state.errorMsg = "Please enter the fields";
        return;
      }

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

        console.log("User:", user);
        console.log("Access Token:", accessToken);
        console.log("Profile:", profile);

        commit("setUser", {
          data: profile,
          token: accessToken,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
