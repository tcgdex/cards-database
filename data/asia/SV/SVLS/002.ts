import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キュウコン"
	},

	illustrator: "Kamome Shirahama",
	category: "Pokemon",
	dexId: [38],
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "黄金に 輝く 体毛と ９本の 長い 尻尾を 持つ。 １０００年は 生きると 言われる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "ほのおのみたま"
		},

		damage: 50,

		effect: {
			'ja-jp': "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card