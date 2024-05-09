import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤングース"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [734],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "胴体の ほとんどが 胃袋。 毎日 同じ ルートを うろつき 新鮮な エサを 探してまわる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はねとばす"
		},

		damage: "10＋",

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card