import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		ja: "ワタル"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "自分の山札からポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680856,
				tcgplayer: 570180,
			},
		},
	],

	trainerType: "Supporter"
}

export default card