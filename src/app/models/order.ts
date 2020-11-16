export class Order {
    orderno: number;
    orderdate: string;
    line: string;
    requiredate: string;
    shippeddate: string;
    status: string;
    comments: string;

    constructor(orderno: number, orderdate: string,line: string,requiredate: string,shippeddate: string,status: string,comments: string) {
      this.orderno = orderno;
      this.orderdate = orderdate;
      this.line = line;
      this.requiredate = requiredate;
      this.shippeddate = shippeddate;
      this.status = status;
      this.comments = comments;
    }
  }
  