import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ハヤト"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。場に自分のスタジアムが出ているなら、さらに2枚引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701557,
				tcgplayer: 568217,
			},
		},
	],

	trainerType: "Supporter"
}

export default card