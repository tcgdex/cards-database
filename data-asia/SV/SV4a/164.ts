import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "岩のむねあて"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている{F}ポケモンが、相手のポケモンから受けるワザのダメージは「-30」される。"
	},

	trainerType: "Tool",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746546,
				tcgplayer: 567565,
				cardtrader: 269772,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577395,
			},
		},
	]
}

export default card
