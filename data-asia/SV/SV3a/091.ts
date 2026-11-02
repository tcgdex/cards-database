import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ビーチコート"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのたねポケモン全員のにげるためのエネルギーは、それぞれ1個ぶん少なくなる。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 734340,
				tcgplayer: 566949,
			},
		},
	],

	trainerType: "Stadium"
}

export default card