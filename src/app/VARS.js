export const VARS = {
  github: false,
  redirect: (this.github === true ? "/portfolio" : "/"),
  routePrefix: (this.github === true ? "/portfolio" : ""),
}
