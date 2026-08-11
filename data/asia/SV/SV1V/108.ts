import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "基本雷エネルギー"
	},

	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693183,
				tcgplayer: 568334,
			},
		},
	],
}

export default card