/// <reference types="react" />
import { LinkAction } from "./Link";
import Redirect from "./Redirect";
import Route from "./Route";
export default class Router {
    routes: (Route | Redirect)[];
    indexes: {
        [name: string]: number;
    };
    constructor(routes?: (Route | Redirect)[]);
    getLinkAction(path: string): LinkAction;
    getParamsAsStrings(prefix?: string | string[]): string[];
    getParamsAsArray(prefix?: string | string[]): any;
    getParamsAsObject(prefix?: string | string[]): any;
    private getReactRoutes;
    render(): JSX.Element;
}
//# sourceMappingURL=Router.d.ts.map