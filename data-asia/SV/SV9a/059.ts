import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポケモンキャッチャー",
		'zh-tw': "寶可夢捕捉器",
		'zh-cn': "寶可夢捕捉器"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		'zh-cn': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card