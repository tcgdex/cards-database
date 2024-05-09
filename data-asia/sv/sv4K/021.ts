import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コソクムシ"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [767],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "群れで かたまり つねに まわりを 警戒している。 敵の 気配を 感じると 散り散りに 逃げ出す。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "こっそりたべる"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ぶつかる"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card