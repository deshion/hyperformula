import {EmptyValueType, CellError, CellValue, ErrorType, SimpleCellAddress} from '../../Cell'
import {ProcedureAst, Ast} from '../../parser'
import {FunctionPlugin} from './FunctionPlugin'
import {SimpleRangeValue} from '../InterpreterValue'

/**
 * Interpreter plugin containing COUNTUNIQUE function
 */
export class CountUniquePlugin extends FunctionPlugin {
  public static implementedFunctions = {
    countunique: {
      translationKey: 'COUNTUNIQUE',
    },
  }

  /**
   * Corresponds to COUNTUNIQUE(Number1, Number2, ...).
   *
   * Returns number of unique numbers from arguments
   *
   * @param ast
   * @param formulaAddress
   */
  public countunique(ast: ProcedureAst, formulaAddress: SimpleCellAddress): CellValue {
    if (ast.args.length === 0) {
      return new CellError(ErrorType.NA)
    }

    const valuesSet = new Set<number | string | boolean | EmptyValueType>()
    const errorsSet = new Set<ErrorType>()

    for (const scalarValue of this.iterateOverScalarValues(ast.args, formulaAddress)) {
      if (scalarValue instanceof CellError) {
        errorsSet.add(scalarValue.type)
      } else if (scalarValue !== "") {
        valuesSet.add(scalarValue)
      }
    }
    
    return valuesSet.size + errorsSet.size
  }

  private* iterateOverScalarValues(asts: Ast[], formulaAddress: SimpleCellAddress): IterableIterator<CellValue> {
    for (const argAst of asts) {
      const value = this.evaluateAst(argAst, formulaAddress)
      if (value instanceof SimpleRangeValue) {
        for (const scalarValue of value.valuesFromTopLeftCorner()) {
          yield scalarValue
        }
      } else {
        yield value
      }
    }
  }
}
