export const VARS = {
  github: false,
  redirect: (this.github === true ? "/portfolio" : "/"),
  prefix: (this.github === true ? "/portfolio" : ""),
}
