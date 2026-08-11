import { Card } from "models/database/card"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "サンダー"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	dexId: [145],
	hp: 110,
	types: ["Lightning"],

	description: {
		'ja-jp': "電気を 自在に 操る。 真っ黒な 雷雲の 中に 巣があると 言い伝えられている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "ついげきボルト"
		},

		damage: "20＋",

		effect: {
			'ja-jp': "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ドリルくちばし"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	rarity: "None"
}

export default card