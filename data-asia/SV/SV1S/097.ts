import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ジニア"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分の山札から進化ポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693063,
				tcgplayer: 567214,
			},
		},
	],

	trainerType: "Supporter"
}

export default card