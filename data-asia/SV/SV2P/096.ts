import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ピーニャ"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Trainer",

	effect: {
		ja: "相手のポケモン全員についている特殊エネルギーをそれぞれ1個ずつ選び、トラッシュする。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707663,
				tcgplayer: 567853,
			},
		},
	],

	trainerType: "Supporter"
}

export default card