/* eslint-disable no-unused-vars */

type ClassName = string | undefined | null;

type UniteClasses = {
  (classes: ClassName[]): string;
  (...classes: ClassName[]): string;
}

/**
 * Function to unite string classes into normal string
 * @example
 * uniteClasses('class1', ' class2  ', null) => 'class1 class2'
 * uniteClasses(['class1', ' class2  ', null]) => 'class1 class2'
 */
export const uniteClasses: UniteClasses = (...args: any[]) => {
  let classes: ClassName[] = Array.isArray(args[0]) ? args[0] : args;

  return classes.reduce((str: string, name: ClassName) => {
    if (name) return str ? `${str} ${name.trim()}` : name;
    return str;
  }, '')
}