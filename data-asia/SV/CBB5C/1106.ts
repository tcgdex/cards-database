import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "风铃铃",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "巨声" },
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "归家铃声" },
			effect: { 'zh-cn': "选择自己的1只备战宝可梦，将那只宝可梦，以及放于其身上的所有卡牌，放回牌库并重洗牌库。" },
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [358],
}

export default card
