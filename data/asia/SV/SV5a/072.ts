import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウッウ"
	},

	illustrator: "Fujimoto Gold",
	category: "Pokemon",
	dexId: [845],
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "物覚えは 悪すぎだが 脳に 使う エネルギーを ぎりぎりにして そのぶんを 戦いに 回すのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "みずでっぽう"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "スピットシュート"
		},

		effect: {
			'ja-jp': "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761532,
				tcgplayer: 566127,
			},
		},
	],

	retreat: 1
}

export default card