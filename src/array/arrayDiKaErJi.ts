/**
 * @description 迪卡尔积
 * @example arrayDiKaErJi([1,2,3],[1,2,3],[1,2,3])
 * @example arrayDiKaErJi([[1,2,3],[1,2,3],[1,2,3]])
 * @returns {Array}
 */
export const arrayDiKaErJi = (...anyAry: any[]): any[] =>
  anyAry.reduce(
    (total: any, current: any) => {
      const ret = [] as any[]
      total.forEach((a: any) => {
        current.forEach((b: any) => {
          ret.push(a.concat([b]))
        })
      })
      return ret
    },
    [[]]
  )
