import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	rarity: "Special illustration rare",
	regulationMark: "G",
	set: Set,

	name: {
		ja: "ミモザ"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンを5枚まで選び、相手に見せて、山札にもどして切る。その後、山札を3枚引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardtrader: 235682,
				cardmarket: 693180,
				tcgplayer: 568331,
			},
		},
	],

	trainerType: "Supporter"
}

export default card