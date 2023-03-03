import Header from "./components/Header.js";
import { setPersonalInfo } from "./components/Storage.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";

class App {
    constructor($body) {
        this.$body = $body;
        this.render();
    }

    async render(){
        
        const header = new Header(this.$body);
        header.render();

        const main = document.createElement("main");
        main.setAttribute("id", "page_content");
        this.$body.appendChild(main);

        await setPersonalInfo();
        
        const homePage = new HomePage(main);
        const signupPage = new SignupPage(main);

        homePage.render();

        document.addEventListener("urlChange", (e) => {
            let pathname = e.detail.href;
            console.log(pathname);
            switch(pathname) {
                case "/web/":
                    homePage.render();
                    break;
                case "/web/signup":
                    signupPage.render();
                    break;
                default:
            }
        });

        

        
    }
}
export default App;