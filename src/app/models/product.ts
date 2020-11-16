export class Product {
    code: number;
    name: string;
    line: string;
    scale: string;
    description: string;

    constructor(code: number, name: string,line: string,scale: string,description: string) {
      this.code = code;
      this.name = name;
      this.line = line;
      this.scale = scale;
      this.description = description;
    }
  }
  