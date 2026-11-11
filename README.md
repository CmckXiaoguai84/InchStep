# 秉微｜InchStep

一个还在设计阶段的任务提醒 App。

先说清楚：现在还没有能装的版本，这里放的是一堆还在改的想法。写这份首页，是想让点进来的朋友大概知道我在琢磨什么、走到哪一步了、还有多少坑没填。

<details open>
<summary><b>中文 · Chinese</b></summary>

<details open>
<summary><b>项目简介</b></summary>

起点是一件挺小、但越想越有问题的事：

多数待办软件只有「完成 / 未完成」两个选项，可现实生活哪有这么斩钉截铁。一件事做了 60%，可能是因为时间不够、太难、分心，或者单纯身体不舒服。你点「完成」吧，自己都觉得是在糊弄自己，负罪感 +1；点「未完成」吧，明明忙活了半天，被一个按钮全盘否定，失败感 +114514。里外不是人 (. _ .)

另外我一直觉得，多邻国那类「做了就有人夸」的正反馈、有个虚拟角色陪着、加上不那么敷衍的动画，能让「坚持」这件事没那么苦，总比叮叮咚咚两声提示音就把你打发了强。再顺手把做过的事多整理整理，回头一看：哦，原来我已经走了这么远了 (￣▽￣)

所以想试着做两件朴素的事：

**一，把事情追到一个明确的结束。** 就算没做完，也老老实实记下做了多少、为什么没做完，不打分、不审判。
**二，给点正反馈。** 状态好的时候使劲夸，状态不好的时候说点针对性的安慰，别只会喊「加油」；再把记录整理成能看懂的样子，让你看清自己身后那条路上都有些什么。

设想里的几个支点（想到哪写到哪，后面大概率还会加）：

- 到点给一个必须明确选择的提醒，别让它悄悄溜走；
- 用 1%–100% 的完成度代替二选一；
- 让吉祥物基于你的记录说几句人话；
- 把做过的痕迹留在时间线上；
- 随手记录、顺手整理；
- 接个 AI 模型，把反馈写得更细一点；
- ……

以上都还是想法，大多还没落地，正在慢慢开发中。说明一下：本人只是个业余爱好者，靠着有限的空余时间拉上 AI 一起折腾，进度嘛……确实不快，纯属兴趣爱好(OvO)

也正因为不图什么，我不打算收任何费用。就算以后接了 AI，用了云服务等等，你自己的钱也是直接付给厂商，我不在中间加价。苹果上架那块就比较头疼了，平台本身要抽成，具体怎么合规地安排还没想明白，还得研究研究 ╮(￣▽￣"")╭

</details>

<details open>
<summary><b>名字的深意</b></summary>

先说说名字，以及我为什么把「坚持」这两个字看得特别松。

**秉微**：「秉」是手持，更是秉持、一直持着；「微」是一点微光。合起来就是「持一点微光，成一种秉性」——不用多亮，坚持就行。
**InchStep**：一寸一步。不要求大步，一寸也算一步。

我总觉得，能坚持下来的事，没有一件是靠某天特别用力，都是靠每天一点点，加上回头复盘总结经验攒下来的。所以「坚持」这个词，我愿意放得很宽：

- 今天只做了一件很小的事，算坚持；
- 今天做了，明天忘了，后天又想起来了，也算坚持；
- 今天失败了、放弃了，但心里那点火没灭。过一阵子不甘心，又把任务捡回来，也叫坚持；
- 今天一整天什么都没做，可心里一直记着，只是被各种事挡住了，我照样算它坚持。

这么算，是因为我真不相信有人能一口气坚持那么多事。任何事想长久，大概都得从很小很小的地方开始，最好就在舒适圈里，或者刚好在圈的边上；一上来就跨得太远，多半撑不过几天。前面那个 1%–100% 的完成度、「达标不用非得 100%」，其实就是从这个念头里长出来的。

做这个 App，说到底也只是想给和我一样容易半途迷路的人一点方向，给那些做事情特别容易内耗的人，还没做的时候，或者失败之后又不停自责的人一点方向 (◐‿◑)

</details>

<details open>
<summary><b>主要功能</b></summary>

下面写的是「打算实现的主要功能」，不是「已经写出来的代码」：

- **任务与提醒**：增删改查、四象限分类、几张预设卡片；本地通知到点提醒，通知上带「开始 / 待会 / 跳过」；打开 App 后进入全屏确认页，逼你给个说法。
- **完成度记录**：1%–100% 滑块，也可以在「完成 / 未完成」之间留个中间态：例如「完成了……但没有完全完成」。另外允许给任务设一个**目标完成度**：到了一个设定的百分比就算达标——毕竟很多事你本来就没指望做满。没达标时选个原因（例：时间不够 / 太难 / 自定义），再问一句要不要二次提醒。
- **进行中与结算**：基于时间戳计时、暂停、提前完成；每日结算只做完成数、平均完成度这类简单统计，不搞花里胡哨的报表。
- **记录型反馈**：早期方案里的积分和商店已经废除——任务不该用积分来定价，就像爱好一旦跟钱挂钩就容易变味。改成成就、成长时间线、条件解锁和吉祥物预设话术，只记录，不兑换。
- **权限与安静模式**：通知、精确闹钟、电池优化的引导；安静模式下不放音乐、不蹦动画，免得人多时直接社死。
- **本地优先**：任务和记录默认存在本机，支持导出 JSON；日记、AI 相关功能涉及隐私，还没定稿。
- **炫酷动画**：想做点好看的提醒弹窗、开场和启动动画，不过目前素材主要存在于我的脑子里和文字草稿里。
- **吉祥物｜AI 陪伴**：打算给它写很多状况和条件，尽量让陪伴不重样。想要更细、更个性化的内容就得接 AI，但那个就要自己花钱了哈。

明确还没做的：任务流完整状态机、专注钟、日记、AI 对话、云同步、成长时间线、iOS Live Activity、开场动画视频……（写到这里我已经开始脑袋痛了） (╯°Д°）╯︵ /(.□ . ＼)

技术方向暂定 React Native + Expo + TypeScript（Expo Router、expo-notifications、expo-sqlite、Zustand、EAS Build）。平台顺序打算 iOS 优先，然后 Android、华为（鸿蒙）等，最后是 macOS / Windows / Linux 桌面端——是的，野心不小，想尽量把大家全覆盖，虽然现在连第一个平台都还没跑通 (⁎⁍̴̛ᴗ⁍̴̛⁎)

</details>

<details open>
<summary><b>安装和使用</b></summary>

<details open>
<summary><b>安装</b></summary>

还没写呢……因为真的还没有能装的东西  (･ _ ･;

</details>

<details open>
<summary><b>运行</b></summary>

这个也没有……还在努力开发 ing。等哪天真能跑了，我把命令贴上来  (｀・ω・´)ゞ

（认真版：目前没有可运行的代码、没有 `package.json`，也没有安装包。Expo 那套 `npm install` / `npx expo start` 是计划中的流程，尚未验证。）

</details>

</details>

<details open>
<summary><b>已知局限性</b></summary>

老实说，现在的问题比进展多：

- **主要是想法和草稿，不是软件。** 没有可安装版本，没有测试，也没有发布计划和时间表。早期设计稿里打勾的「已实现」，其实是当时的愿望清单，不宜当成真实进度。
- **文档之间还没吵完架。** 早期版本残留着已废除的积分和商店设计；任务流能不能跨天、过时后还追不追、加时怎么算，几份文档各说各话；任务状态机、任务实例模型、通知调度策略都还没拍板。
- **平台比我想的严格。** iOS 不允许第三方 App 在非前台强制接管屏幕，通知也能被随手滑掉，「不选就不消失」做不到，只能改成「通知可操作 + 打开后必须选择」；后台精确计时得靠时间戳和预调度通知，不保证准点；Android 的全屏 Intent 和精确闹钟也受系统版本与商店政策管着。
- **有些设想可能长期躺在清单里。** 日记、AI 对话、云同步牵涉隐私、成本和平台规则，第一版大概率不会包含；吉祥物的「记忆」目前也只是「本地记录 + 模板拼接」的设想，不是真有个小精灵住在手机里。
- **名字和授权都还没拍板。** 标题虽然写上去了，前面还认认真真解释了一通，但商店名称和商标都还没查，说不定哪天就得改名；代码的开源许可、隐私政策、AI 功能怎么合规，也还没有结论。
- **更新全看缘分。** 不盈利的个人项目，更新会随我的工作和生活状况飘忽不定，回复也可能很慢——人是真的比较忙，不过会尽量挤时间！！！ (￣^￣)ゞ

</details>

<details open>
<summary><b>反馈与贡献</b></summary>

读到哪里觉得不对、前后打架，或者觉得某个设计纯属把事情搞复杂，都欢迎提出。哪怕只是改个错别字、指出一处过时说法，也很有帮助。说啥都行，这项目很开放。

要是你也觉得这想法不错，而且觉得「这我上我也行、还能做得更好」——那尽管把创意拿去自己做一个，要是真能赚钱那更好。这份文档和里面的想法，随便拿去用，不用问我，也不用提我的名字。不用顾虑我，反正我根本不盈利～ (●°u°●)

目前没有正式的贡献流程，没有 `CONTRIBUTING.md`，没有 CI，也没有 Issue 模板。直接提 Issue、留个言、发一段想法都行，不必讲究格式。不敢保证每条建议都采纳，但会认真看、认真回，被采纳的也会在文档里注明来源。

</details>

<details open>
<summary><b>写在最后</b></summary>

想太多、迟迟动不了的时候，就请停下思考与顾虑，开始行动，哪怕只走了一点点。

正如《道德经》里说的：**为者败之，执者失之。** 刻意强为反而容易失败，这对应着我们那些定得过高的目标；紧抓不放反而容易失去，这对应着我们为了一个任务反复纠结内耗，从而患得患失，难以开始。

所以不要强行自律，至少我自己是控制不住的。一切都需要顺其自然，顺应你自己的情况而行。

—— **合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。**（《道德经》）

当你因为各种事物而纠结，说明这个任务可能有些难了，那么是时候开始最小化行动了！<(｀ω´ )>

> **一点免责声明**：这篇 README 里关于坚持、名字和《道德经》的这些说法，全是我个人的想法，不是什么方法论，也不构成任何建议，更不一定适合所有人——有人靠狠劲和纪律走得更好，那也完全没问题。觉得不对味，就当看个乐子，按自己的节奏来就好。这软件也不会替你判断你「算不算坚持」

谢谢你愿意花时间读到这儿，最后正经一下：我是涓埃爝明，愿以绵薄之力，帮到需要的人 d—(￣3￣)>

</details>

---

这份文档和里面的想法随便用，不用署名；代码的许可等真有代码了再说  (・ω・)ノ

</details>

---

<details>
<summary><b>InchStep｜秉微 · English</b></summary>

A task reminder app that's still just a design.

Quick note before anything else: there is nothing to install yet. What lives here is a pile of ideas that keeps changing. I wrote this page so anyone landing on this repo can tell what I'm thinking about, how far I've got, and how many holes are still unfilled.

<details open>
<summary><b>Why I'm Making This</b></summary>

It started with something small, which turned out to be a bigger problem the more I thought about it.

Most to-do apps give you exactly two options: Done / Not done. Real life is nowhere near that tidy. You might get 60% of a task done because you ran out of time, because it was too hard, because you got distracted, or simply because you felt awful. Hit "Done" and you know you're lying to yourself — guilt +1. Hit "Not done" and a whole afternoon of effort gets wiped out by one button — sense of failure +114514 (yes, that number is a joke). Either way you lose (. _ .)

I also think the Duolingo-ish "someone notices when you do the thing" feedback, a little character hanging around, and animations that aren't just a lazy ding, could make sticking with something less miserable. Add a bit of tidying up of what you've done, and one day you look back and go: oh, I've actually come quite a way (￣▽￣)

So there are two plain things I'd like to try:

**One: bring every task to a clear ending.** Even if it isn't finished, honestly write down how much got done and why it stopped. No scores, no verdicts.
**Two: give some positive feedback.** Cheer loudly on good days, say something specific and kind on bad days instead of just shouting "you got this"; and turn the records into something readable, so you can see what's actually lying along the road behind you.

A few planks of the idea, in no particular order (this list will probably grow):

- A reminder at the due time that demands an explicit choice, so it can't quietly slip away;
- A 1–100% progress scale instead of a binary checkbox;
- A mascot that says a few human sentences based on your own records;
- A timeline that keeps the traces of what you did;
- Jot things down as you go, tidy them up as you go;
- Plug in an AI model for more detailed feedback;
- ...

None of this is built yet. Most of it hasn't even started; it's being developed very slowly. Full disclosure: I'm a hobbyist tinkering with AI help in whatever spare time I have, so progress really is slow. This is just a hobby (OvO)

Because I'm not after anything, I don't plan to charge for it. Even when AI or other cloud services get involved, your money goes straight to the provider — I won't add a margin in the middle. The App Store side is the headache: Apple takes a cut, and I haven't figured out a compliant way to arrange that yet. Still researching ╮(￣▽￣"")╭

</details>

<details open>
<summary><b>What's in the Name</b></summary>

First, the name — and why I take the word "consistency" so loosely.

**秉微 (Bingwei)**: 秉 means to hold something in your hand, and also to hold onto it, to keep it until it becomes part of your character; 微 is a tiny bit of light. Together: *hold a little light until it becomes your nature*. It doesn't have to be bright. It just has to keep going.
**InchStep**: one inch, one step. No big strides required; an inch still counts.

I don't think anything you actually stick with comes from one heroic day. It comes from tiny daily bits, plus looking back now and then and banking what you learned. So I'm willing to define "consistency" very generously:

- You did one very small thing today. That counts.
- You did it today, forgot tomorrow, remembered again the day after. That counts too.
- You failed today and gave up, but the little fire inside didn't go out. A while later, stubborn, you picked the task back up. That counts too.
- You did nothing all day, but it stayed in the back of your mind and other things got in the way. I still count that.

I define it this way because I genuinely don't believe anyone can keep that many things going at once. Anything that lasts probably has to start very, very small — ideally inside your comfort zone, or right at its edge. Reach too far on day one and it usually doesn't survive the week. The 1–100% scale, and "you don't have to hit 100% to count as done", both grew out of this.

In the end I just want to offer a bit of direction to people who, like me, tend to lose their way halfway — people who overthink, who beat themselves up before they even start or after they fail (◐‿◑)

</details>

<details open>
<summary><b>What I'd Like It to Do</b></summary>

What follows is **what I plan to build**, not **code that already exists**:

- **Tasks and reminders**: create / edit / delete / list, four-quadrant sorting, a few preset cards; local notifications at the due time with "Start" / "Later" / "Skip"; opening the app takes you to a full-screen confirmation that makes you give an answer.
- **Progress records**: a 1–100% slider, plus an in-between state between "done" and "not done" — something like "I did it... but not all the way". You can also set a **target percentage** for a task: reaching it counts as meeting the goal, because plenty of things were never meant to be finished 100%. If you fall short, pick a reason (not enough time / too hard / custom) and get asked whether you want a follow-up reminder.
- **In progress and daily wrap-up**: timestamp-based timing, pause, finish early; the daily wrap-up only does simple numbers like tasks completed and average progress — no fancy dashboards.
- **Feedback that only records**: the early points-and-shop design is gone. A task shouldn't have a price tag; hobbies tend to go stale once money gets attached. Instead: achievements, a growth timeline, conditional unlocks, and preset mascot lines. Recorded, never redeemed.
- **Permissions and quiet mode**: onboarding for notifications, exact alarms and battery optimisation; quiet mode drops the music and the bouncing animations, so you don't die of embarrassment on a crowded train.
- **Local first**: tasks and records live on the device by default, with JSON export; journaling and anything AI-related touch privacy and aren't settled yet.
- **Fancy animations**: I'd like nice reminder pop-ups, an intro and a launch animation. Right now those assets exist mostly in my head and in text drafts.
- **Mascot / AI companion**: I plan to write a lot of situations and conditions for it so the company doesn't repeat itself. More detailed, personal content would need AI — and that one costs your own money.

Definitely not built yet: the full task-flow state machine, a focus timer, journaling, AI chat, cloud sync, the growth timeline, iOS Live Activity, an intro animation video... (my head already hurts just writing this list) (╯°Д°）╯︵ /(.□ . ＼)

The stack is tentatively React Native + Expo + TypeScript (Expo Router, expo-notifications, expo-sqlite, Zustand, EAS Build). Platform order: iOS first, then Android and Huawei (HarmonyOS), and eventually macOS / Windows / Linux desktop. Yes, the ambition is a bit much — I'd like to cover everyone, even though the first platform doesn't even run yet (⁎⁍̴̛ᴗ⁍̴̛⁎)

</details>

<details open>
<summary><b>Installing and Running</b></summary>

<details open>
<summary><b>Installing</b></summary>

Not written yet... because there is genuinely nothing to install.  (･ _ ･;

</details>

<details open>
<summary><b>Running</b></summary>

Also nope... still slowly building it. When it actually runs, I'll paste the commands here.  (｀・ω・´)ゞ

(Serious version: there is no runnable code, no `package.json`, and no installable build. The Expo `npm install` / `npx expo start` flow is only a plan, unverified — please don't type it in yet.)

</details>

</details>

<details open>
<summary><b>Known Limitations</b></summary>

Honestly, there are more problems than progress:

- **Mostly ideas and drafts, not software.** No installable build, no tests, no release plan or timeline. The checked "implemented" items in early design drafts were a wish list, not real progress.
- **The internal drafts still contradict each other.** Early versions still contain the abandoned points/shop design; whether a task may cross midnight, whether it keeps nudging after it's overdue, and how extra time is counted are described differently in different notes; the task state machine, task-instance model and notification scheduling strategy are all still undecided. (These are my own unorganised design notes, not files in this repo.)
- **The platforms are stricter than I imagined.** iOS doesn't let third-party apps take over the screen when not in the foreground, and notifications can be swiped away, so "it won't disappear until you choose" is impossible; the fallback is actionable notifications plus a mandatory choice after opening. Background timing relies on timestamps and pre-scheduled notifications and isn't guaranteed to be exact. Android's full-screen intents and exact alarms are also constrained by OS version and store policy.
- **Some ideas may sit on the list for a long time.** Journaling, AI chat and cloud sync involve privacy, cost and platform rules, so they're unlikely to be in the first version. The mascot's "memory" is still just an idea about local records plus template stitching — there is no little fairy actually living in your phone.
- **Name and licensing aren't settled.** The title is up there and I even explained it at length above, but I haven't checked store names or trademarks, so it may have to change one day. The code's open-source licence, the privacy policy, and how to keep the AI feature compliant are all open questions.
- **Updates happen whenever they happen.** This is a non-commercial personal project, so updates drift with my work and life, and replies can be slow — I really am busy, but I'll try to make time!!! (￣^￣)ゞ

</details>

<details open>
<summary><b>Feedback and Contributions</b></summary>

If something reads wrong, contradicts something else, or strikes you as a design that only makes things more complicated, please say so. Even fixing a typo or pointing out a stale sentence helps. Anything goes; this project is wide open.

And if you like the idea and think "I could build this better myself" — please do, take the idea and make your own version. If you even make money from it, great. This document and the ideas in it are free to use; you don't need to ask me or credit me. Don't worry about me, I'm not making any money from this anyway～ (●°u°●)

There's no formal contribution process, no `CONTRIBUTING.md`, no CI, and no issue templates. Open an issue, leave a comment, send a paragraph of thoughts — no need to worry about format. I can't promise every suggestion gets adopted, but I'll read and reply properly, and anything adopted will be credited in the documents.

</details>

<details open>
<summary><b>One Last Thing</b></summary>

When you're overthinking and can't get moving, stop thinking and second-guessing and just start — even if it's only a tiny bit.

As the *Tao Te Ching* says: **"Those who force things ruin them; those who hold on lose them."** Forcing it tends to fail — that's our over-ambitious goals. Gripping too tight tends to lose it — that's chewing on one task until you're too anxious to even begin.
So don't try to force yourself into discipline; I certainly can't. Let it follow its own course, and your own.

— **"A tree you can barely wrap your arms around grew from a tiny shoot; a nine-storey terrace rose from a heap of earth; a journey of a thousand miles begins beneath your feet."** (*Tao Te Ching*, Ch. 64; Chinese: 合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。)

When everything about a task makes you hesitate, that's probably a sign it's too big. Time to make the first move as small as it can be! <(｀ω´ )>

> **A small disclaimer**: everything above about consistency, the name and the *Tao Te Ching* is just my personal take. It isn't a method, it isn't advice, and it may not fit everyone — some people do much better with sheer grit and discipline, and that's completely fine. If it doesn't taste right, treat it as a bit of fun and keep your own pace. The app won't be deciding whether you "count as consistent", either.

Thanks for reading this far. One serious line to finish: I go by 涓埃爝明, and I'd like to offer what little help I can to whoever needs it. d—(￣3￣)>

</details>

---

This document and the ideas in it are free to use, no attribution needed. The licence for the code can wait until there is actually some code.

</details>
