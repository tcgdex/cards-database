import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "カウンターキャッチャー",
		'zh-tw': "反擊捕捉器"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。\n\n相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
		'zh-tw': "這張卡只有在自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多時才可使用。選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card