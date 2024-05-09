import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ヒヒダルマ"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "OKUBO",
	dexId: [555],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "血気 盛んな ポケモン。 太い 腕から 繰りだす パンチは ダンプカーも 粉々に するぞ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "ころがりタックル"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "もうかのとっしん"
		},

		damage: 210,

		effect: {
			ja: "このポケモンにも70ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card
