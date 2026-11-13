import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "アイリスの闘志"
	},

	illustrator: "yuu",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。自分の手札が6枚になるように、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846836,
				tcgplayer: 660135,
				cardtrader: 345827,
			},
		},
	]
}

export default card
