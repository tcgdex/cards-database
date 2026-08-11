import { Card } from "models/database/card"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゼロの大空洞"
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場に「テラスタル」のポケモンがいるプレイヤーが、ベンチに出せるポケモンの数は8匹になる。\n\n（このカードがトラッシュされたときか、自分の場に「テラスタル」のポケモンがいなくなったとき、ベンチが5匹になるまでトラッシュする。おたがいにトラッシュするなら、このカードの持ち主から行う。）"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 779149,
				tcgplayer: 567990,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "None"
}

export default card