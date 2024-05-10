import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "のろいのはたき",
		'zh-tw': "詛咒撢子"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、相手の手札からオモテを見ないで1枚選び、トラッシュする。",
		'zh-tw': "附有這張卡的寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，在不看正面的情況下，從對手的手牌選擇1張，將其丟棄。"
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card