import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ペパー"
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「グッズ」と「ポケモンのどうぐ」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693179,
				tcgplayer: 568330,
			},
		},
	],

	trainerType: "Supporter"
}

export default card