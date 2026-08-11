import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "なかよしポフィン"
	},
	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840640,
				tcgplayer: 647203,
			},
		},
	],

	trainerType: "Item",
	effect: {
		'ja-jp': "自分の山札から、HPが「70」以下のたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
	},
	regulationMark: "I",
	rarity: "Secret Rare"
}

export default card
