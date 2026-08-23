import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "比比鸟",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "波波",
	},
	description: {
		'zh-cn': "有着广阔的领地。要是有哪个讨厌鬼胆敢入侵，就会被它狠狠地啄击。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "振翅" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [17],
}

export default card
