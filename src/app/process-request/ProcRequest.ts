export class ProcRequest {
  UserName: string;
  ContactNumber: string;
  CreditCardNumber: string;
  ComponentType: string;
  ComponentName: string;
  Quantity: number;
  PriorityRequest: string;

  constructor(
    UserName: string,
    ContactNumber: string,
    CreditCardNumber: string,
    ComponentType: string,
    ComponentName: string,
    Quantity: number,
    PriorityRequest: string
  ) {
    this.UserName = UserName;
    this.ContactNumber = ContactNumber;
    this.CreditCardNumber = CreditCardNumber;
    this.ComponentType = ComponentType;
    this.ComponentName = ComponentName;
    this.Quantity = Quantity;
    this.PriorityRequest = PriorityRequest;
  }
}
