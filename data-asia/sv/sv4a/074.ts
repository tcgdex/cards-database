import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユンゲラー"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [64],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "念力の 威力は 絶大。 進化に 備えて 額の 星に サイコパワーを 蓄えている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "テレポートアタック"
		},

		damage: 30,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card