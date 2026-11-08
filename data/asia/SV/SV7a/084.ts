import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "サーファー"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。その後、自分の手札が5枚になるように、山札を引く。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788057,
				tcgplayer: 579466,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None"
}

export default card