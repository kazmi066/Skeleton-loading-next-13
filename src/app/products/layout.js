export default function ProductsPageLayout({children}) {
  const mainStyles = {
    width: "80%",
    margin: "0 auto",
    padding: "6rem",
    minHeight: "100vh"
  }

  return (
    <main style={mainStyles}>
      {children}
    </main>
  )
}
