import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マリル"
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	dexId: [183],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "全身の 体毛は 水を 弾く 性質を 持ち 水浴び しても 乾いている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card