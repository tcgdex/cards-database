import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギソウ"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	dexId: [2],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びるほど 体に 力が わいて 背中の つぼみが 育っていく。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "やどりぎのタネ"
		},

		damage: 30,

		effect: {
			ja: "このポケモンのHPを「20」回復する。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "つるのムチ"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card