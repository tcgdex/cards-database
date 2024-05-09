import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "マッスグマ"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [264],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "抜群の 瞬発力と するどいツメで 獲物を しとめる。 曲がった 道を 走るのは 下手。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジェットヘッド"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とつげき"
		},

		damage: 150,

		effect: {
			ja: "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0
}

export default card