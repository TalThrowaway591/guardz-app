# Guarz React Application

Demo Application By Tal Arbetov

## Startup (dev server)

To run a standalone client instance on the development server:

- Make sure SSR is turned on: switch `ssr` to `true` inside `react-router.config.ts`

## Dilemmas

- should I create a React project from scratch or bootstrap?

- create form functionality from scratch or use a library?

- A user should only be able to retrieve his own submitted data, how do I differenciate between users?
first thought is by IP, but I can't send the IP address from the client since a malicious actor can spoof it(?)


## TODO

- add a color pallete constants
- style better
- add functionallity to remove entries
- work on inter-environment logic better (dev vs prod env variable handling, logic changes between envs)