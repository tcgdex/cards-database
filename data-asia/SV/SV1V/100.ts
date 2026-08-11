import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ミモザ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンを5枚まで選び、相手に見せて、山札にもどして切る。その後、山札を3枚引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693175,
				tcgplayer: 568326,
			},
		},
	],

	trainerType: "Supporter"
}

export default card