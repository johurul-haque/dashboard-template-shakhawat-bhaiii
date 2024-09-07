import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Provider } from 'react-redux'
import { store } from '../store.ts'

export const Route = createRootRoute({
  component: () => (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  ),
})
