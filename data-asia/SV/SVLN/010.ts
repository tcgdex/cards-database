import { Card } from "../../../interfaces"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		ja: "カビゴン"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	dexId: [143],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "胃袋の 消化液は どんな 毒も 消化できる。 落ちているものを 食べても 平気。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スパイクドロー"
		},

		damage: 20,

		effect: {
			ja: "自分の山札を1枚引く。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "メガトンパンチ"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	rarity: "None"
}

export default card