import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アマカジ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [761],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "果物を 煮詰めたような 甘い 汗を かくため 甘味の 少ない 昔は とても 重宝された。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "クイックアタック"
		},

		damage: "10＋",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card