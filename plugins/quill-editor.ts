
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
// Deprecated
// import VueQuillEditor from 'vue-quill-editor/dist/ssr'

Vue.use(VueQuillEditor, {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ]
  },
  placeholder: 'Global placeholder...'
})