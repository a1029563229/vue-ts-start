export const mixin = {
    methods: {
        isDef(val: any) {
            return typeof val !== undefined && typeof val !== null;
        },

        locationHref(url: string) {
            const self = <any>this;
            self.$router.push(url);
        },
    }
}