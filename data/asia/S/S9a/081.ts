import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ツツジ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、相手のサイドの残り枚数が3枚以下のときにしか使えない。\n\nおたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は6枚、相手は2枚、山札を引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609849,
				tcgplayer: 570651,
			},
		},
	],

	trainerType: "Supporter"
}

export default card