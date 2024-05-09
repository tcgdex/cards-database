import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "フシギダネ"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	dexId: [1],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "生まれて しばらくの あいだ 背中の タネに つまった 栄養を とって 育つ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "やどりぎのタネ"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card