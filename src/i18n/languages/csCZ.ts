/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */

import {RawTranslationPackage} from '..'
// import

const dictionary: RawTranslationPackage = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DĚLENÍ_NULOU!',
    ERROR: '#ERROR!',
    NA: '#NENÍ_K_DISPOZICI',
    NAME: '#NÁZEV?',
    NUM: '#ČÍSLO!',
    REF: '#ODKAZ!',
    VALUE: '#HODNOTA!',
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ARCCOS',
    ACOSH: 'ARCCOSH',
    ACOT: 'ACOT',
    ACOTH: 'ACOTH',
    AND: 'A',
    ASIN: 'ARCSIN',
    ASINH: 'ARCSINH',
    ATAN: 'ARCTG',
    ATAN2: 'ARCTG2',
    ATANH: 'ARCTGH',
    AVERAGE: 'PRŮMĚR',
    AVERAGEA: 'AVERAGEA',
    AVERAGEIF: 'AVERAGEIF',
    BASE: 'BASE',
    BIN2DEC: 'BIN2DEC',
    BIN2HEX: 'BIN2HEX',
    BIN2OCT: 'BIN2OCT',
    BITAND: 'BITAND',
    BITLSHIFT: 'BITLSHIFT',
    BITOR: 'BITOR',
    BITRSHIFT: 'BITRSHIFT',
    BITXOR: 'BITXOR',
    CEILING: 'ZAOKR.NAHORU',
    CHAR: 'ZNAK',
    CHOOSE: 'ZVOLIT',
    CLEAN: 'VYČISTIT',
    CODE: 'KÓD',
    COLUMNS: 'SLOUPCE',
    CONCATENATE: 'CONCATENATE',
    CORREL: 'CORREL',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'POČET',
    COUNTA: 'POČET2',
    COUNTBLANK: 'COUNTBLANK',
    COUNTIF: 'COUNTIF',
    COUNTIFS: 'COUNTIFS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'CSC',
    CSCH: 'CSCH',
    DATE: 'DATUM',
    DATEDIF: 'DATEDIF', //FIXME
    DATEVALUE: 'DATUMHODN',
    DAY: 'DEN',
    DAYS: 'DAYS',
    DAYS360: 'ROK360',
    DEC2BIN: 'DEC2BIN',
    DEC2HEX: 'DEC2HEX',
    DEC2OCT: 'DEC2OCT',
    DECIMAL: 'DECIMAL',
    DEGREES: 'DEGREES',
    DELTA: 'DELTA',
    EDATE: 'EDATE',
    EOMONTH: 'EOMONTH',
    ERF: 'ERF',
    ERFC: 'ERFC',
    EVEN: 'ZAOKROUHLIT.NA.SUDÉ',
    EXP: 'EXP',
    FALSE: 'NEPRAVDA',
    FIND: 'NAJÍT',
    FORMULATEXT: 'FORMULATEXT',
    FV: 'BUDHODNOTA',
    HOUR: 'HODINA',
    IF: 'KDYŽ',
    IFERROR: 'IFERROR',
    IFNA: 'IFNA',
    INDEX: 'INDEX',
    INT: 'CELÁ.ČÁST',
    IPMT: 'PLATBA.ÚROK',
    ISBINARY: 'ISBINARY',
    ISBLANK: 'JE.PRÁZDNÉ',
    ISERR: 'JE.CHYBA',
    ISERROR: 'JE.CHYBHODN',
    ISEVEN: 'ISEVEN',
    ISFORMULA: 'ISFORMULA',
    ISLOGICAL: 'JE.LOGHODN',
    ISNA: 'JE.NEDEF',
    ISNONTEXT: 'JE.NETEXT',
    ISNUMBER: 'JE.ČISLO',
    ISODD: 'ISODD',
    ISOWEEKNUM: 'ISOWEEKNUM',
    ISREF: 'JE.ODKAZ',
    ISTEXT: 'JE.TEXT',
    LEFT: 'ZLEVA',
    LEN: 'DÉLKA',
    LN: 'LN',
    LOG: 'LOGZ',
    LOG10: 'LOG',
    MATCH: 'POZVYHLEDAT',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MIN: 'MIN',
    MINA: 'MINA',
    MINUTE: 'MINUTA',
    MMULT: 'SOUČIN.MATIC',
    MOD: 'MOD',
    MONTH: 'MĚSÍC',
    NA: 'NEDEF',
    NOW: 'NYNÍ',
    NOT: 'NE',
    ODD: 'ZAOKROUHLIT.NA.LICHÉ',
    OFFSET: 'POSUN',
    OR: 'NEBO',
    PI: 'PI',
    PMT: 'PLATBA',
    POWER: 'POWER',
    PPMT: 'PLATBA.ZÁKLAD',
    PROPER: 'VELKÁ2',
    RADIANS: 'RADIANS',
    RAND: 'NÁHČÍSLO',
    REPT: 'OPAKOVAT',
    RIGHT: 'ZPRAVA',
    ROUND: 'ZAOKROUHLIT',
    ROUNDDOWN: 'ROUNDDOWN',
    ROUNDUP: 'ROUNDUP',
    ROWS: 'ŘÁDKY',
    SEARCH: 'HLEDAT',
    SEC: 'SEC',
    SECH: 'SECH',
    SECOND: 'SEKUNDA',
    SHEETS: 'SHEETS',
    SHEET: 'SHEET',
    SIN: 'SIN',
    SINH: 'SINH',
    SPLIT: 'SPLIT',
    SQRT: 'ODMOCNINA',
    SUM: 'SUMA',
    SUMIF: 'SUMIF',
    SUMIFS: 'SUMIFS',
    SUMPRODUCT: 'SOUČIN.SKALÁRNÍ',
    SUMSQ: 'SUMA.ČTVERCŮ',
    SWITCH: '',
    TAN: 'TG',
    TANH: 'TGH',
    TEXT: 'HODNOTA.NA.TEXT',
    TIME: 'ČAS',
    TIMEVALUE: 'ČASHODN',
    TODAY: 'DNES',
    TRANSPOSE: 'TRANSPOZICE',
    TRIM: 'PROČISTIT',
    TRUE: 'PRAVDA',
    TRUNC: 'USEKNOUT',
    VLOOKUP: 'SVYHLEDAT',
    WEEKDAY: 'DENTÝDNE',
    WEEKNUM: 'WEEKNUM',
    XOR: 'XOR',
    YEAR: 'ROK',
    YEARFRAC: 'YEARFRAC',
  },
  langCode: 'csCZ',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet',
  },
}

export default dictionary
