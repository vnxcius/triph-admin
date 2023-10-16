// Variáveis devem começar com letra maiúscula devido a API em GO
export type User = {
  ID: number,
  Username: string,
  FirstName: string,
  LastName: string,
  Email: string,
  Password?: string,
}