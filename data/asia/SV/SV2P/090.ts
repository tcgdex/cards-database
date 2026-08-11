import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "グルーシャ"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分の手札が5枚になるように、山札を引く。自分の場のポケモンにエネルギーが1枚もついていないなら、7枚になるように引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707657,
				tcgplayer: 567847,
			},
		},
	],

	trainerType: "Supporter"
}

export default card