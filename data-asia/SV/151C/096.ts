import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "催眠貘",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	description: {
		'zh-cn': "记得所有自己吃过的梦。由于小孩子的梦比较美味，因此几乎不吃大人的梦。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "意念头锤" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [96],
}

export default card
