import { Card } from "../../../interfaces"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		ja: "マリル"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	dexId: [183],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "脂が 詰まっている 尻尾が 浮き袋の 代わりと なるので 流れの 速い 川も 平気。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ころがりタックル"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card