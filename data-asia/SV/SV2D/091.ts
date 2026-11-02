import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、それぞれ自分のサイドの残り枚数ぶん、山札を引く。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707701,
				tcgplayer: 565953,
			},
		},
	],

	trainerType: "Supporter"
}

export default card