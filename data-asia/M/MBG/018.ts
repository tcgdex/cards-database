import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ふうせん"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが2個ぶん少なくなる。"
	},

	trainerType: "Tool",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846835,
				tcgplayer: 660134,
				cardtrader: 345826,
			},
		},
	]
}

export default card
