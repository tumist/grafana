import { RegistryItem, Registry } from './Registry';

export enum BinaryOperationID {
  Add = '+',
  Subtract = '-',
  Divide = '/',
  Multiply = '*',
}

export type BinaryOperation = (left: number, right: number) => number;

interface BinaryOperatorInfo extends RegistryItem {
  operation: BinaryOperation;
}

function multiplyNotNull(a: number, b: number): number {
  if (a == null || b == null) {
    return NaN;
  }
  return a * b;
}

export const binaryOperators = new Registry<BinaryOperatorInfo>(() => {
  return [
    {
      id: BinaryOperationID.Add,
      name: 'Add',
      operation: (a: number, b: number) => a + b,
    },
    {
      id: BinaryOperationID.Subtract,
      name: 'Subtract',
      operation: (a: number, b: number) => a - b,
    },
    {
      id: BinaryOperationID.Multiply,
      name: 'Multiply',
      operation: multiplyNotNull,
    },
    {
      id: BinaryOperationID.Divide,
      name: 'Divide',
      operation: (a: number, b: number) => a / b,
    },
  ];
});
