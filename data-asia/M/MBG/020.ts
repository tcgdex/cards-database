import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ボスの指令"
	},

	illustrator: "NC Empire",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	trainerType: "Supporter",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846837,
				tcgplayer: 660136,
				cardtrader: 345828,
			},
		},
	]
}

export default card
