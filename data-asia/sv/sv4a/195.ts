import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハネッコ"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [187],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "風に 流され かなりの 距離を 移動する。 パルデアの ハネッコが どこから 来たのかは はっきりしない。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はねてかわす"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card