import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミツルの思いやり"
	},
	illustrator: "Iori Suzuki",
	category: "Trainer",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840644,
				tcgplayer: 647222,
			},
		},
	],

	trainerType: "Supporter",
	effect: {
		'ja-jp': "自分の「メガシンカex」1匹のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべて手札にもどす。"
	},
	regulationMark: "I",
	rarity: "Secret Rare"
}

export default card
