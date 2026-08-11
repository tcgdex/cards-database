import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヘラクロス"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	dexId: [214],
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "甘いミツが 大好きで 独り占め するため 自慢のツノを 使って 相手を ぶん投げる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'ja-jp': "たいあたり"
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'ja-jp': "スマッシュホーン"
		},

		damage: 110,

		effect: {
			'ja-jp': "このワザのダメージは抵抗力を計算しない。"
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
				cardmarket: 707668,
				tcgplayer: 565934,
			},
		},
	],

	retreat: 3,
}

export default card