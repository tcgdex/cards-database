import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	rarity: "Ultra Rare",
	regulationMark: "G",
	set: Set,

	name: {
		ja: "博士の研究（フトゥー博士）"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardtrader: 235675,
				cardmarket: 693173,
				tcgplayer: 568324,
			},
		},
	],

	trainerType: "Supporter"
}

export default card