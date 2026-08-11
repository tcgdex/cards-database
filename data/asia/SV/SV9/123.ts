import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "タケシのスカウト"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモンを2枚まで、または進化ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807710,
				tcgplayer: 614999,
			},
		},
	],

	trainerType: "Supporter"
}

export default card