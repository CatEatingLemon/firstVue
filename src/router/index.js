import Vue from 'vue'
import VueRouter from 'vue-router'

//引入页面
import Login from '../views/Login'
import Index from '../views/Index'
import LoginStatis from '../views/LoginStatis'
import LoginAdminStatis from '../views/LoginAdminStatis'
import Read from '../views/Read'
import Paper from '../views/Paper'
import OnlineClass from '../views/OnlineClass'
import WordGame from '../views/WordGame'
import TestVocabulary from '../views/TestVocabulary'
import Thesaurus from '../views/Thesaurus'
import Translate from '../views/Translate'
import RecThePicture from '../views/RecThePicture'
import QAHistroy from '../views/QAHistroy'
import QAError from '../views/QAError'
import Teacher from '../views/Teacher'
import Student from '../views/Student'
import Work from '../views/Work'
import PaperError from '../views/PaperError'
import OnlineQA from '../views/OnlineQA'
import GameFeedback from '../views/GameFeedback'
import VocaFeedback from '../views/VocaFeedback'
import FMError from '../views/FMError'
import ThemeRec from '../views/ThemeRec'
import ThemeError from '../views/ThemeError'
import ArticleRead from '../views/ArticleRead'
import Clbum from '../views/Clbum'
import TSRead from '../views/TSRead'
import BookReadUse from '../views/BookReadUse'
import FakePlay from '../views/FakePlay'
import Conjugation from '../views/Conjugation'
import UserNote from '../views/UserNote'
import NewsPush from '../views/NewsPush'
import FilePush from '../views/FilePush'
import ConjugationFeedback from '../views/ConjugationFeedback'
import RegisIncomes from '../views/RegisIncomes'
import Advisory from '../views/Advisory'
import Evaluation from '../views/Evaluation'
import ContestResult from '../views/ContestResult'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      title: 'QiYou-Admin'
    }
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    meta: {
      title: 'QiYou-Admin'
    }
  },
  {
    path: '/LoginStatis',
    name: 'LoginStatis',
    component: LoginStatis
  },
  {
    path: '/LoginAdminStatis',
    name: 'LoginAdminStatis',
    component: LoginAdminStatis
  },
  {
    path: '/Read',
    name: 'Read',
    component: Read
  },
  {
    path: '/ArticleRead',
    name: 'ArticleRead',
    component: ArticleRead
  },
  {
    path: '/Paper',
    name: 'Paper',
    component: Paper
  },
  {
    path: '/OnlineClass',
    name: 'OnlineClass',
    component: OnlineClass
  },
  {
    path: '/WordGame',
    name: 'WordGame',
    component: WordGame
  },
  {
    path: '/TestVocabulary',
    name: 'TestVocabulary',
    component: TestVocabulary
  },
  {
    path: '/Thesaurus',
    name: 'Thesaurus',
    component: Thesaurus
  },
  {
    path: '/Translate',
    name: 'Translate',
    component: Translate
  },
  {
    path: '/RecThePicture',
    name: 'RecThePicture',
    component: RecThePicture
  },
  {
    path: '/QAHistroy',
    name: 'QAHistroy',
    component: QAHistroy
  },
  {
    path: '/QAError',
    name: 'QAError',
    component: QAError
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/Student',
    name: 'Student',
    component: Student
  },
  {
    path: '/Work',
    name: 'Work',
    component: Work
  },
  {
    path: '/PaperError',
    name: 'PaperError',
    component: PaperError
  },
  {
    path: '/OnlineQA',
    name: 'OnlineQA',
    component: OnlineQA
  },
  {
    path: '/GameFeedback',
    name: 'GameFeedback',
    component: GameFeedback
  },
  {
    path: '/VocaFeedback',
    name: 'VocaFeedback',
    component: VocaFeedback
  },
  {
    path: '/FMError',
    name: 'FMError',
    component: FMError
  },
  {
    path: '/ThemeRec',
    name: 'ThemeRec',
    component: ThemeRec
  },
  {
    path: '/ThemeError',
    name: 'ThemeError',
    component: ThemeError
  },
  {
    path: '/Clbum',
    name: 'Clbum',
    component: Clbum
  },
  {
    path: '/TSRead',
    name: 'TSRead',
    component: TSRead
  },
  {
    path: '/BookReadUse',
    name: 'BookReadUse',
    component: BookReadUse
  },
  {
    path: '/FakePlay',
    name: 'FakePlay',
    component: FakePlay
  },
  {
    path: '/Conjugation',
    name: 'Conjugation',
    component: Conjugation
  },
  {
    path: '/UserNote',
    name: 'UserNote',
    component: UserNote
  },
  {
    path: '/NewsPush',
    name: 'NewsPush',
    component: NewsPush
  },
  {
    path: '/FilePush',
    name: 'FilePush',
    component: FilePush
  },
  {
    path: '/ConjugationFeedback',
    name: 'ConjugationFeedback',
    component: ConjugationFeedback
  },
  {
    path: '/RegisIncomes',
    name: 'RegisIncomes',
    component: RegisIncomes
  },
  {
    path: '/Advisory',
    name: 'Advisory',
    component: Advisory
  },
  {
    path: '/Evaluation',
    name: 'Evaluation',
    component: Evaluation
  }, {
    path: '/ContestResult',
    name: 'ContestResult',
    component: ContestResult
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router