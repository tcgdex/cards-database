import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "いれかえカート",
		'zh-tw': "交替推車"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のバトル場のたねポケモンをベンチポケモンと入れ替える。その後、ベンチに入れ替えたポケモンのHPを「30」回復する。",
		'zh-tw': "將自己的戰鬥場的【基礎】寶可夢與備戰寶可夢互換。然後，將換入備戰區的寶可夢恢復「30」HP。"
	},

	trainerType: "Item",
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651028,
				tcgplayer: 569815,
				cardtrader: 234198,
			},
		},
	]
}

export default card