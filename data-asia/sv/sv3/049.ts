import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤジロン"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [343],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "古代 遺跡で 発見された。 回転 しながら 移動。 夜 眠る ときも 一本足だ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "こうそくスピン"
		},

		damage: 10,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。"
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

	retreat: 2
}

export default card