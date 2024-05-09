import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Darkness", "Colorless"],

		name: {
			ja: "こうそくドライブ"
		},

		damage: 100,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		}
	}],

	retreat: 1
}

export default card