import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火伊布",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "烧焦" },
			effect: { 'zh-cn': "使对手的战斗宝可梦陷入【灼伤】状态。" },
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { 'zh-cn': "熊熊燃烧" },
			effect: { 'zh-cn': "选择附着于这只宝可梦身上的1个能量，放于弃牌区。然后，选择附着于对手战斗宝可梦身上的1个能量，放于弃牌区。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "D",
	rarity: "Common",
	dexId: [136],
}

export default card
