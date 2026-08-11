import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミツルの思いやり"
	},
	illustrator: "Jiro Sasumo",
	category: "Trainer",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840650,
				tcgplayer: 647223,
			},
		},
	],

	trainerType: "Supporter",
	effect: {
		'ja-jp': "自分の「メガシンカex」1匹のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべて手札にもどす。"
	},
	regulationMark: "I",
	rarity: "Special illustration rare"
}

export default card
