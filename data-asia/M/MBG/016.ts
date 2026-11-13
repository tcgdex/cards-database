import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "夜のタンカ"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンまたは基本エネルギーを1枚選び、相手に見せて、手札に加える。"
	},

	trainerType: "Item",
	regulationMark: "H",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846833,
				tcgplayer: 660132,
				cardtrader: 345824,
			},
		},
	]
}

export default card
