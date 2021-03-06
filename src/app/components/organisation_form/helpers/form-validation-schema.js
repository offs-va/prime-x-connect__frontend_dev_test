import * as Yup from 'yup'

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required') // should be configured in config
})

export default formValidationSchema
