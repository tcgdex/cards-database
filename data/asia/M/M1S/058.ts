import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガシグナル"
	},
	illustrator: "Inose yukie",
	category: "Trainer",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 840617,
				tcgplayer: 647219,
			},
		},
	],

	trainerType: "Item",
	effect: {
		'ja-jp': "自分の山札から「メガシンカex」を1枚選び、相手に見せて手札に加える。そして山札を切る。"
	},
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card
