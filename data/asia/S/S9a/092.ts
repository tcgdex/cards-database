import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "こだわりベルト"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "ポケモンのどうぐは、自分のポケモンにつけて使う。ポケモン1匹につき1枚だけつけられ、つけたままにする。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609860,
				tcgplayer: 570662,
			},
		},
	],

	trainerType: "Tool"
}

export default card