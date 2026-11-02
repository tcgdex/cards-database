import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		ja: "大口の沼"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、手札からたねポケモンをベンチに出すたび、そのポケモンにダメカンを2個のせる。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680859,
				tcgplayer: 570183,
			},
		},
	],

	trainerType: "Stadium"
}

export default card