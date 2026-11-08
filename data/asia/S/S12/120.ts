import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジンダイ"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。\n\nおたがいのベンチポケモンの数ぶん、自分の山札を引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680854,
				tcgplayer: 570178,
			},
		},
	],

	trainerType: "Supporter"
}

export default card