import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "铜象",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: { 'zh-cn': "撞击" },
			damage: 30,
		},
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: { 'zh-cn': "正面对决" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [878],
}

export default card
