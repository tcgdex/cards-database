import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤバソチャex"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "せんじがえし"
		},

		effect: {
			'ja-jp': "自分のトラッシュにある「基本エネルギー」をすべて相手に見せ、その枚数×2個ぶんのダメカンを、相手のポケモン1匹にのせる。その後、見せたエネルギーを山札にもどして切る。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "まっちゃスプラッシュ"
		},

		damage: 120,

		effect: {
			'ja-jp': "自分のポケモン全員のHPを、それぞれ「30」回復する。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761549,
				tcgplayer: 566144,
			},
		},
	],

	retreat: 1
}

export default card