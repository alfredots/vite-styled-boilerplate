import packageJson from '../../package.json'

const { version } = packageJson

const uri: { [key: string]: string } = {
  development: 'https://jsonplaceholder.typicode.com/todos',
  production: 'https://jsonplaceholder.typicode.com',
  test: 'https://'
}

const env = process.env

export { uri, version, env }
