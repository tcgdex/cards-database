import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガチガチバンド"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている1進化ポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。"
	},

	trainerType: "Tool",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746548,
				tcgplayer: 567567,
				cardtrader: 269771,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577397,
			},
		},
	]
}

export default card
