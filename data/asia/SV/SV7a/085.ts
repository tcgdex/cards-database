import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ドラセナ"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札をすべて山札にもどして切る。その後、コインを1回投げ、オモテなら8枚、ウラなら3枚、山札を引く。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788058,
				tcgplayer: 579467,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None"
}

export default card