/*
 public int Id_res { get; set; }

        [Required]
        public int RequestId { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public double ProcessingCharge { get; set; }

        [Required]
        public double PackagingAndDeliveryCharge { get; set; }

        [Required]
        public DateTime DateOfDelivery { get; set; }

        [Required]
        public double TotalCharge { get; set; }

        [Required]
        public string CreditCardNo { get; set; }
*/

export class ProcResponse {
  Id_res: number;
  RequestId: number;
  UserName: string;
  ProcessingCharge: number;
  PackagingAndDeliveryCharge: number;
  DateOfDelivery: string;
  TotalCharge: number;
  CreditCardNo: string;

  constructor(
    Id_res: number,
    RequestId: number,
    UserName: string,
    ProcessingCharge: number,
    PackagingAndDeliveryCharge: number,
    DateOfDelivery: string,
    TotalCharge: number,
    CreditCardNo: string
  ) {
    this.Id_res = Id_res;
    this.RequestId = RequestId;
    this.UserName = UserName;
    this.ProcessingCharge = ProcessingCharge;
    this.PackagingAndDeliveryCharge = PackagingAndDeliveryCharge;
    this.DateOfDelivery = DateOfDelivery;
    this.TotalCharge = TotalCharge;
    this.CreditCardNo = CreditCardNo;
  }
}
