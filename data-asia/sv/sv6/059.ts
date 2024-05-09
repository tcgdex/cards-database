import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ドッコラー"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Kouki Saitou",
	dexId: [532],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "角材を 振り回して 戦う。 重い 角材を 苦もなく 持つようになると 進化は 近い。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ぜんりょくパンチ"
		},

		damage: 40,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card
