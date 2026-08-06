import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "チェレンの気くばり"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		ja: "ダメカンがのっている自分のポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606288,
				tcgplayer: 569751,
			},
		},
	],

	trainerType: "Supporter"
}

export default card