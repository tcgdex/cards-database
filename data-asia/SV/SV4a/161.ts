import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハイパーボール"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746543,
				tcgplayer: 567562,
				cardtrader: 269773,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577392,
			},
		},
	]
}

export default card
