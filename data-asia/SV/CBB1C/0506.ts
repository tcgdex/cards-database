import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "润水鸭",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "突击" },
			effect: { 'zh-cn': "给这只宝可梦也造成10伤害。" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [912],
}

export default card
