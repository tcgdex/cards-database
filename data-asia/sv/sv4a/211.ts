import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "リザード"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [5],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "戦いで 気持ちが たかぶると 灼熱の 炎を 吹きながら あたりを 燃やしてまわる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フレアヴェール"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "かえん"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card