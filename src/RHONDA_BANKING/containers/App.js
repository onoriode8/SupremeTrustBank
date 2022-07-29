import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import User from './Users/Users';
import Footer from '../components/footer';
import LocalTransfer from './Users/LocalTransfer/LocalTransfer';
import Auth from '../components/context/Auth';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation/Navigation';
import PersonalLoan from '../components/routes/personalLoan';
import houseInvestment from '../components/routes/HouseInvestment/HouseInvestment';
import CreditCard from '../components/routes/CreditCard/CreditCard';
import DebitCard from '../components/routes/DebitCard/DebitCard';
import GiftCard from '../components/routes/GiftCard/GiftCard';
import Savings from '../components/routes/Savings/Savings';
import investment from '../components/routes/InvestmentAccount';
import homeLoan from '../components/routes/HomeLoans/HomeLoans';



const App = props => {
    let content = <Switch>
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/supreme/personal/invest" exact component={PersonalLoan} />
                    <Route path="/supreme/house/invests" exact component={houseInvestment} />
                    <Route path="/supreme/credit" exact component={CreditCard} />
                    <Route path="/supreme/debit" exact component={DebitCard} />
                    <Route path="/supreme/pre/gitcard" exact component={GiftCard} />
                    <Route path="/supreme/savings" exact component={Savings} />
                    <Route path="/supreme/investment" exact component={investment} />
                    <Route path="/home/lo" exact component={homeLoan} />

                    <Redirect to="/auth" />
                  </Switch>
    if(props.login) {
        content = <Switch>
                    <Route path="/" exact component={User} /> 
                    <Route path="/:userId/supreme/transfer" exact component={LocalTransfer} />
                    <Route path="/supreme/personal/invest" exact component={PersonalLoan} />
                    <Route path="/supreme/house/invests" exact component={houseInvestment} />
                    <Route path="/supreme/credit" exact component={CreditCard} />
                    <Route path="/supreme/debit" exact component={DebitCard} />
                    <Route path="/supreme/pre/gitcard" exact component={GiftCard} />
                    <Route path="/supreme/savings" exact component={Savings} />
                    <Route path="/supreme/investment" exact component={investment} />
                    <Route path="/home/lo" exact component={homeLoan} />

                    <Redirect to="/" /> 
                </Switch>
    }

    return <React.Fragment>
                <Navigation /> 
                {/* https://github.com/onoriode8/SupremeTrustBank.git */}
                {content}
            <Footer />
        </React.Fragment>
};

const mapStateToProps = props => {
    return {
        login: props.isAuthentication
    }
}

export default connect(mapStateToProps)(App);