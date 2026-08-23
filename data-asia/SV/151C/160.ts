import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "凯西",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	description: {
		'zh-cn': "能够在睡梦中使出瞬间移动。据说它睡得越熟，就能移动到越遥远的地方。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "精神射击" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [63],
}

export default card
