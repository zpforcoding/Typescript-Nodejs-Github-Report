import { GitHubApiService } from './GithubApiService'
import * as _ from 'lodash'
import { Repo } from './Repo'
import { User } from './User'

let svc: GitHubApiService = new GitHubApiService()
// console.log(process.argv[2])
if (process.argv.length < 3) {
  console.log('必须传入用户名')
} else {
  svc.getUserInfo(process.argv[2], (user: User) => {
    svc.getRepos(user.login, (repos: Repo[]) => {
      let sortedRepos = _.sortBy(repos, [
        function (o: Repo) {
          return o.forks_count
        },
      ])
      user.repos = sortedRepos
      console.log(user)
    })
  })
}
