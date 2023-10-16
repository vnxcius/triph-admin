import { RequireAuth } from "../contexts/RequireAuth"

type DefaultPageProps = {
  children: React.ReactNode
}

const DefaultPage = ({ children }: DefaultPageProps) => {
  return (
    <RequireAuth>
      <div>
        <h1>Default Page</h1>
        <p>This page is only visible to authenticated users.</p>
        {children}
      </div>
    </RequireAuth>
  )
}

export default DefaultPage