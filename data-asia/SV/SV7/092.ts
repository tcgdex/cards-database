import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "福祿果",
		'zh-cn': "福祿果",
		ja: "ウタンのみ"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "附有這張卡的寶可夢受到對手的【超】寶可夢招式的傷害時，那個傷害「-60」點，將這張卡丟棄。",
		'zh-cn': "附有這張卡的寶可夢受到對手的【超】寶可夢招式的傷害時，那個傷害「-60」點，將這張卡丟棄。",
		ja: "このカードをつけているポケモンが、相手のポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。"
	},

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card