import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダイノーズ"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	dexId: [476],
	hp: 140,
	types: ["Fighting"],

	description: {
		'ja-jp': "強い 磁力を 放っているので 近くにある 電化製品は 使いものに ならなくなってしまう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "アサルトレーザー"
		},

		damage: "80＋",

		effect: {
			'ja-jp': "相手のバトルポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ランドクラッシュ"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 761536,
				tcgplayer: 566131,
			},
		},
	],

	retreat: 3,
}

export default card