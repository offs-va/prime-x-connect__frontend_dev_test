import { actions } from '../state_management/actions'

/* eslint no-debugger: "off" */
const userRowActions = ({
  user,
  usersQuery,
  dispatch
}) => ([
  {
    variant: 'primary',
    label: 'Edit',
    onClick: () => {
      dispatch(actions.setSelectedUser(user))
      dispatch(actions.toggleUserFormModal(true))
    }
  },
  {
    variant: 'danger',
    label: 'Delete',
    onClick: () => {
      dispatch(actions.deleteOrganisationUser(user.id)).then(() => {
        dispatch(actions.getOrganisationUsersList(usersQuery))
      })
    }
  }
])

export default userRowActions
