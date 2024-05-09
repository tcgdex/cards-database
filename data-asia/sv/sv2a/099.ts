import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "キングラー"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [99],
	hp: 140,
	types: ["Water"],

	description: {
		ja: "破壊力 抜群の 大きな ハサミだが 重すぎるので 戦わないときは じゃまになる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "アームハンマー"
		},

		damage: 90,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。"
		}
	}, {
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			ja: "ハサミギロチン"
		},

		damage: 220
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card