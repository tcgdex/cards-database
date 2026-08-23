import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "凯罗斯",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "缓慢咀嚼" },
			effect: { 'zh-cn': "将这只宝可梦身上附着的能量，全部放于弃牌区。在下一个对手的回合结束时，受到这个招式影响的宝可梦会【昏厥】。" },
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "怪力角击" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [127],
}

export default card
