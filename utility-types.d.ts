type NonEmptyArray<T> = [T, ...T[]];

type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];