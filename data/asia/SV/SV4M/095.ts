import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "基本鋼エネルギー",
		'ko-kr': "기본 강철 에너지"
	},

	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741924,
				tcgplayer: 566055,
			},
		},
	],
}

export default card