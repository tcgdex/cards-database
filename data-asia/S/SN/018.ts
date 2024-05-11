import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可夢捕捉器",
		ja: "ポケモンキャッチャー"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "擲1次硬幣若為正面，則選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。",
		ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card