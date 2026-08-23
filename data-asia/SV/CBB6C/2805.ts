import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "吉雉鸡",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "亢奋费洛蒙" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着了【恶】能量的话，则当这只宝可梦受到招式的伤害时，自己抛掷1次硬币。如果为正面，则这只宝可梦不受到该伤害。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "能量之羽" },
			effect: { 'zh-cn': "造成这只宝可梦身上附着的能量数量×30伤害。" },
			damage: "30×",
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1016],
}

export default card
