import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import AppContainer from './app_container';
import SessionFormContainer from './session/session_form_container';
import NewProjectFormContainer from './project/new_project_form_container';
import EditProjectContainer from './project/edit_project_form_container';
import BasicInfoFormContainer from './project/basic_info_form_container';
import StoryInfoFormContainer from './project/story_info_form_container';
import RewardsInfoFormContainer from './project/rewards_info_form_container';
import HomePageContainer from './project/home_page/home_page_container';
import ProjectShowContainer from './project/project_show/project_show_container';
import CreateContributionContainer from './project/project_show/contribution_payment_container';
import SearchResultsConttainer from './navigation/search_results_container';
import CategoryShowListContair from './categories/category_show_list_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) {
      replace('/');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace ) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      replace('/signup');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }>
          <IndexRoute component={ HomePageContainer } />
          <Route path="/signup" component = { SessionFormContainer } onEnter = { _redirectIfLoggedIn } />
          <Route path="/login"  component = { SessionFormContainer } onEnter = { _redirectIfLoggedIn } />
          <Route path="/projects/new" onEnter = { _redirectIfNotLoggedIn } component = { NewProjectFormContainer } />
          <Route path="projects/search-results" component= { SearchResultsConttainer }/>
          <Route path='projects/:projectId' component = { ProjectShowContainer } />
          <Route path="/projects/:projectId/contribution/new" component = { CreateContributionContainer } />
          <Route path="/projects/edit/:projectId" component = { EditProjectContainer }>
            <Route path="/projects/edit/:projectId/basicInfo" onEnter = { _redirectIfNotLoggedIn } component = { BasicInfoFormContainer } />
            <Route path="/projects/edit/:projectId/storyInfo" onEnter = { _redirectIfNotLoggedIn } component = { StoryInfoFormContainer } />
            <Route path="/projects/edit/:projectId/rewardsInfo" onEnter = { _redirectIfNotLoggedIn } component = { RewardsInfoFormContainer } />
          </Route>
          <Route path="categories/:categoryType" component = { CategoryShowListContair } />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
