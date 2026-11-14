import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ふしぎなアメ"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の手札から2進化ポケモンを1枚選び、そのポケモンへと進化する自分の場のたねポケモンにのせ、1進化をとばして進化させる。（最初の自分の番や、出したばかりのポケモンには使えない。）"
	},

	trainerType: "Item",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746545,
				tcgplayer: 567564,
				cardtrader: 269754,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577394,
			},
		},
	]
}

export default card
