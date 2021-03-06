import React from 'react'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route, Redirect } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'react-jss'

import './lib/Capacitor'
import { client } from './lib/Apollo'
import theme from './styles/theme'
import routes from 'routes'
import { AuthorizedRoute } from 'components'
import { DrawerMenu } from 'modules/drawer'
import { ToastNotification } from 'modules/notification'
import { AuthProvider } from 'modules/authentication/context'

// User views
import LoginView from 'modules/authentication/views/LoginView'
import HomeView from 'modules/home/views/HomeView'
import WalletView from 'modules/wallet/views/WalletView'
import BillsView from 'modules/bills/views/BillsView'
import NewTransactionView from 'modules/transaction/views/NewTransactionView'
// Admin views
import PayTransactionView from 'modules/admin/views/PayTransactionsView'
import GroupView from 'modules/admin/views/GroupView'

const App = () => (
  <IonApp>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <IonReactRouter>
            <ToastNotification />
            <DrawerMenu />
            <IonRouterOutlet>
              <AuthorizedRoute path={routes.home} component={HomeView} />
              <AuthorizedRoute path={routes.wallet} component={WalletView} />
              <AuthorizedRoute path={routes.bills} component={BillsView} />
              <AuthorizedRoute path={routes.newTransaction} component={NewTransactionView} />
              {/* admin views */}
              <AuthorizedRoute path={routes.admin.group} component={GroupView} admin />
              <AuthorizedRoute path={routes.admin.payTransaction} component={PayTransactionView} admin />
              <Route path={routes.login} component={LoginView} />
              <Redirect exact from="/" to={routes.login} />
            </IonRouterOutlet>
          </IonReactRouter>
        </AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  </IonApp>
)

export default App
