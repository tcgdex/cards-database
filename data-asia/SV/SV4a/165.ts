import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "大きなふうせん"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている2進化ポケモンのにげるためのエネルギーは、すべてなくなる。"
	},

	trainerType: "Tool",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746547,
				tcgplayer: 567566,
				cardtrader: 269763,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577396,
			},
		},
	]
}

export default card
