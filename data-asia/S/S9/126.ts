import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "ハイパーボール"
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。\n\n自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606291,
				tcgplayer: 569754,
			},
		},
	],

	trainerType: "Item"
}

export default card