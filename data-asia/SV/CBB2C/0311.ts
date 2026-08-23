import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雷伊布",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "迅雷觉醒" },
			effect: { 'zh-cn': "如果这只宝可梦身上放有「回忆胶囊」的话，则双方场上【水】宝可梦的特性，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: { 'zh-cn': "雷电球" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "D",
	rarity: "Double rare",
	dexId: [135],
}

export default card
