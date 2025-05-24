import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊的驚嚇炸彈",
		'zh-cn': "火箭隊的驚嚇炸彈",
		ja: "ロケット団のびっくりボム"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "擲1次硬幣若為正面，則在對手的1隻寶可夢身上放置2個傷害指示物。若為反面，則在自己的戰鬥寶可夢身上放置2個傷害指示物。",
		'zh-cn': "擲1次硬幣若為正面，則在對手的1隻寶可夢身上放置2個傷害指示物。若為反面，則在自己的戰鬥寶可夢身上放置2個傷害指示物。",
		ja: "コインを1回投げオモテなら、相手のポケモン1匹に、ダメカンを2個のせる。ウラなら、自分のバトルポケモンに、ダメカンを2個のせる。"
	},

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card