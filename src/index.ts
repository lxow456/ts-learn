interface GenericIndentityFn<T> {
    defaultValue: T;
};

let obj: GenericIndentityFn<string> = {
    defaultValue: 'xxx'
};

let obj2: GenericIndentityFn<number> = {
    defaultValue: 100
};