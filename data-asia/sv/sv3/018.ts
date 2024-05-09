import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒヒダルマ"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [555],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "体内の 炎が 燃え盛るほど パワーが 高まる。 その 温度は １４００度を 超える ことも。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "カンカンパンチ"
		},

		damage: "60＋",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、60ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートブラスト"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card