import { h } from 'hyperapp'
import { Post } from './Post'

const Home = h('div', null, [
  h('div', null, 'home')
])

const About = h('div', null, [
  h('div', null, 'about')
])

const Catalog = h('div', null, [
  h('div', null, 'catalog')
])

const Compare = h('div', null, [
  h('div', null, 'compare')
])

const Contact = h('div', null, [
  h('div', null, 'contact')
])

const Dashboard = h('div', null, [
  h('div', null, 'dashboard')
])

const Inventory = h('div', null, [
  h('div', null, 'inventory')
])

const Profile = h('div', null, [
  h('div', null, 'profile')
])

const Settings = h('div', null, [
  h('div', null, 'settings')
])

const Update = h('div', null, [
  h('div', null, 'update')
])

const NotFound = h('div', null, [
  h('div', null, '404')
])

const RouterView = data => ({
  '': Home,
  '/about': About,
  '/catalog': Catalog,
  '/compare': Compare,
  '/contact': Contact,
  '/dashboard': Dashboard,
  '/inventory': Inventory,
  '/post': Post,
  '/profile': Profile,
  '/settings': Settings,
  '/update': Update
})[data.path] || NotFound

export { RouterView }
