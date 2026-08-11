import { Card } from "models/database/card"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巧可果",
		'zh-cn': "巧可果",
		'ja-jp': "オッカのみ"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "‌附有這張卡的寶可夢受到對手的【火】寶可夢招式的傷害時，那個傷害「-60」點，將這張卡丟棄。",
		'zh-cn': "‌附有這張卡的寶可夢受到對手的【火】寶可夢招式的傷害時，那個傷害「-60」點，將這張卡丟棄。",
		'ja-jp': "このカードをつけているポケモンが、相手のポケモンからワザのダメージを受けるとき、そのダメージは「-60」され、このカードをトラッシュする。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 779107,
				tcgplayer: 567948,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card