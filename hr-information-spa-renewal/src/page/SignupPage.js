import ContentTitle from "../components/ContentTitle.js"
import SignupView from "../components/SignupView.js";

class SignupPage {
    constructor($main) {
        this.$main = $main;
    }

    render() {
        
        const title = new ContentTitle(this.$main, "Sign Up, GreatPeoPle!");
        title.render();
        
        const signupView = new SignupView(this.$main);
        signupView.render();
    }
}
export default SignupPage;