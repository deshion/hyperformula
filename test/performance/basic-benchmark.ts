import {batch, benchmark, BenchmarkResult} from './benchmark'
import {expectedValues as expectedValuesT, sheet as sheetTGenerator} from './sheets/05-sheet-t'
import {expectedValues as expectedValuesA, sheet as sheetAGenerator} from './sheets/09-sheet-a'
import {expectedValues as expectedValuesB, sheet as sheetBGenerator} from './sheets/10-sheet-b'
import {sheet as columnRangesGenerator} from './sheets/column-ranges'

export function runBasicBenchmark(): BenchmarkResult[] {
  const result: BenchmarkResult[] = []
  const sheetA = sheetAGenerator()
  const sheetB = sheetBGenerator()
  const sheetT = sheetTGenerator()
  const infiniteRanges = columnRangesGenerator()

  batch(result,
    () => benchmark('Sheet A', sheetA, expectedValuesA(sheetA), { numberOfRuns: 100 }),
    () => benchmark('Sheet B', sheetB, expectedValuesB(sheetB), { numberOfRuns: 100 }),
    () => benchmark('Sheet T', sheetT, expectedValuesT(sheetT), { numberOfRuns: 100 }),
    () => benchmark('Column ranges', infiniteRanges, [{
      address: 'AX50',
      value: 1.04519967355127e+63
    }], { expectedTime: 1000, numberOfRuns: 100 })
  )

  return result
}
