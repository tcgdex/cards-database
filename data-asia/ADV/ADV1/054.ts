import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "オダマキはかせ"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、自分の手札が6枚になるまでカードを引く。"
	},

	trainerType: "Supporter",
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784538,
				tcgplayer: 613091,
				cardtrader: 138038,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784538,
				tcgplayer: 613091,
				cardtrader: 138038,
			},
		},
	]
}

export default card
