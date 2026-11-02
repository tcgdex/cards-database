import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "緊急ボード"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。そのポケモンの残りHPが「30」以下なら、にげるためのエネルギーは、すべてなくなる。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761555,
				tcgplayer: 566150,
			},
		},
	],

	trainerType: "Tool"
}

export default card