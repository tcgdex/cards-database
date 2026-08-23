import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火伊布",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "灼热觉醒" },
			effect: { 'zh-cn': "如果这只宝可梦身上放有「回忆胶囊」的话，则双方场上【草】宝可梦的特性，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { 'zh-cn': "火焰鬃毛" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "D",
	rarity: "Rare",
	dexId: [136],
}

export default card
