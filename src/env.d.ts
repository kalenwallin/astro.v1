/// <reference types="astro/client" />
declare global {
    var myString: string;
    function myFunction(): boolean;
}

export {};
interface Window {
    myFunction(): boolean;
}
