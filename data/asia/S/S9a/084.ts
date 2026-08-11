import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ガブリアスV"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Fighting", "Colorless"],

		name: {
			'ja-jp': "ドラゴンクロー"
		},

		damage: 120
	}, {
		cost: ["Water", "Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "ソニックストライク"
		},

		effect: {
			'ja-jp': "このポケモンについているエネルギーを3個トラッシュし、相手のポケモン1匹に、220ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609852,
				tcgplayer: 570654,
			},
		},
	],

	retreat: 0
}

export default card