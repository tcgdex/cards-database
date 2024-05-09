import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘラクロス"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [214],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "甘いミツが 大好きで 独り占め するため 自慢のツノを 使って 相手を ぶん投げる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "たいあたり"
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "スマッシュホーン"
		},

		damage: 110,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card