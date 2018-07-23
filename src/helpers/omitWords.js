import { words } from "lodash";

const wordsToOmit =
  "a also am an and are aren't We're bring any only as at be been but by can can't cannot could couldn't did didn't do does doesn't don't down e.g. for from get gets got had hadn't has hasn't have haven't he he'd he'll he's her him his how however I i.e. I'd I'll I'm I've if in into is isn't it it's its may me might mine must mustn't must've my no not of off on or our ours out shall she she'd she'll she's should shouldn't so such than that that's the their theirs them then there there's these they they'd they'll they're they've this those thus to too up us very was wasn't we we'd we'll we're we've were what when where which who why will with won't would wouldn't you you'd you'll you're you've your yours";

export const grammarWords = words(wordsToOmit);
