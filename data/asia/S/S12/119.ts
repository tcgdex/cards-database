import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "さぎょういん"
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を3枚引く。場に出ているスタジアムをトラッシュする。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680853,
				tcgplayer: 570177,
			},
		},
	],

	trainerType: "Supporter"
}

export default card