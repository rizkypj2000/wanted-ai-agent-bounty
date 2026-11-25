# wanted-ai-agent-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/rizkypj2000/wanted-ai-agent-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/rizkypj2000/wanted-ai-agent-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry in make.fun's bounty for promoting its make-your-own-bounty post on X. The entry is one post: a quote of
make.fun's post asking "What would YOU make AI agents do for a $50 bounty?", with a fill-in-the-blanks
WANTED poster (DEAD OR DEPLOYED) as its photo. This repository names the post and hands it to the grader.

- The post: https://x.com/0xGatau/status/2125466153887965504
- The post's text, and why it is written that way: [POST_COPY.md](POST_COPY.md)
- The photo: [poster/poster.png](poster/poster.png), rendered from [poster/poster.html](poster/poster.html) with
  make.fun's press-pack lockup and ghost illustration, used as they are.

`main.ts` (Node 22, standard library only, no network) reads `POST.json`, warns on stderr if its address does not
look like an X post's, and copies it byte for byte to the output directory, where the gate reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

To render the poster again: `chrome --headless=new --hide-scrollbars --window-size=1200,1500 --screenshot=poster.png poster/poster.html`

---

<sub>Entered on [make.fun](https://make.fun/?ref=8nnqeja9&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
