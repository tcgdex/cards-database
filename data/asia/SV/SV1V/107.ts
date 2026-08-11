import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ふしぎなアメ"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の手札から2進化ポケモンを1枚選び、そのポケモンへと進化する自分の場のたねポケモンにのせ、1進化をとばして進化させる。（最初の自分の番や、出したばかりのポケモンには使えない。）"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693182,
				tcgplayer: 568333,
			},
		},
	],

	trainerType: "Item"
}

export default card