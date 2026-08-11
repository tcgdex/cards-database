import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チオンジェンex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'ja-jp': "むさぼるつた"
		},

		effect: {
			'ja-jp': "相手のベンチポケモン1匹に、相手がすでにとったサイドの枚数×60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			'ja-jp': "フォレストバーン"
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707659,
				tcgplayer: 567849,
			},
		},
	],

	retreat: 4
}

export default card