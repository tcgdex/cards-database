import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドン"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	dexId: [79],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "いつも ボーッとしていて なにを 考えているか わからない。 尻尾で エサを 釣るのが 得意。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねむる"
		},

		effect: {
			ja: "このポケモンをねむりにする。このポケモンのHPを「30」回復する。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "ずつき"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card