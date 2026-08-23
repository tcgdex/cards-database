import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "古空棘鱼",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "深潜回忆" },
			effect: { 'zh-cn': "只要这只宝可梦在场上，自己所有已经进化的宝可梦，可以使用其所有进化前拥有的招式。[需要满足使用招式所需能量。]" },
		},
	],
	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "鳍之利刃" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [369],
}

export default card
