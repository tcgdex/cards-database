import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ペリーラ"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		ja: "自分の手札が、相手の手札の枚数より1枚多くなるように、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651321,
				tcgplayer: 569834,
				cardtrader: 234221,
			},
		},
	]
}

export default card
