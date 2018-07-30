const files = (<any>require).context('.', false, /\.ts$/)
const modules = {}

files.keys().forEach((key: string) => {
    if (key === './index.ts') return;
    (<any>modules)[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

export default modules