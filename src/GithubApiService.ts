import * as request from 'request'
import { Repo } from './Repo'
import { User } from './User'

const options = {
  headers: {
    'User-Agent': 'request',
  },
  json: true,
}

export class GitHubApiService {
  getUserInfo(username: string, cb: (user: User) => any) {
    request.get(
      'https://api.github.com/users/' + username,
      options,
      (error: any, response: any, body: any) => {
        let user: User = new User(body)
        cb(user)
      }
    )
  }
  getRepos(username: string, cb: (repos: Repo[]) => any) {
    request.get(
      'https://api.github.com/users/' + username + '/repos',
      options,
      (error: any, response: any, body: any) => {
        let repos: Repo[] = body.map((repo: any) => new Repo(repo))
        cb(repos)
      }
    )
  }
}
