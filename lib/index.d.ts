import _Vue from "vue";
import { SweetAlertOptions, SweetAlertResult, SweetAlertType } from "sweetalert2";
export declare class VueSimpleAlertModify {
    static globalOptions: SweetAlertOptions;
    static alert(message?: string, title?: string, type?: SweetAlertType, options?: SweetAlertOptions): Promise<boolean>;
    static confirm(message?: string, title?: string, type?: SweetAlertType, options?: SweetAlertOptions): Promise<boolean>;
    static prompt(message: string, defaultText?: string, title?: string, type?: SweetAlertType, options?: SweetAlertOptions): Promise<string>;
    static fire(options: SweetAlertOptions): Promise<SweetAlertResult>;
    static install(Vue: typeof _Vue, options: SweetAlertOptions): void;
}
declare module "vue/types/vue" {
    interface Vue {
        $alert: typeof VueSimpleAlertModify.alert;
        $confirm: typeof VueSimpleAlertModify.confirm;
        $prompt: typeof VueSimpleAlertModify.prompt;
        $fire: typeof VueSimpleAlertModify.fire;
    }
    interface VueConstructor {
        alert: typeof VueSimpleAlertModify.alert;
        confirm: typeof VueSimpleAlertModify.confirm;
        prompt: typeof VueSimpleAlertModify.prompt;
        fire: typeof VueSimpleAlertModify.fire;
    }
}
export default VueSimpleAlertModify;
