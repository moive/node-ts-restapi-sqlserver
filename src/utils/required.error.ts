export function errorFielRequired(val: any): any {
  if (Object.values(val)[0] == null || Object.values(val)[0] === undefined)
    throw new Error(`${Object.keys(val)[0]} is required`);
}
