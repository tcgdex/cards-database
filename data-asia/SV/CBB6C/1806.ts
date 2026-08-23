import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "卡璞・哞哞",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "木槌" },
			effect: { 'zh-cn': "给这只宝可梦也造成30伤害。" },
			damage: 220,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [787],
}

export default card
