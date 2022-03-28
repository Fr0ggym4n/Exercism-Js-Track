//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    let rows = this.matrix.split('\n');

    const mappedResult = rows.map((row) => {
      const splitRes = row.split(' ');

      return splitRes.map((number) => {
        return Number(number);
      });
    });
    return mappedResult;
  }

  get columns() {
    const columns = [];

    for (let i = 0; i <= this.rows.length; i++) {
      columns[i] = this.rows.map((row) => {
        return row[i];
      });
    }
    return columns;
  }
}
