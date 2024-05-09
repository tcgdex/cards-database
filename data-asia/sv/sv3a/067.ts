import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "バチュル"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	dexId: [595],
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "ほかの ポケモンに とりついて 静電気を 吸い取る。 ワンパチの お尻に よく くっついている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "はねまくる"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card