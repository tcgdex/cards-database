import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フライゴンV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Fighting"],

		name: {
			'ja-jp': "すなしぶき"
		},

		damage: 70
	}, {
		cost: ["Grass", "Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "ドラゴンインパルス"
		},

		damage: "160＋",

		effect: {
			'ja-jp': "相手のバトルポケモンが「ポケモンVMAX」なら、160ダメージ追加。その場合、このポケモンについているエネルギーを3個選び、トラッシュする。"
		}
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606275,
				tcgplayer: 569738,
			},
		},
	],

	retreat: 2
}

export default card