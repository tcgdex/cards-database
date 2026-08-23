import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "耿鬼",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "鬼斯通",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "暗夜之门" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。将自己的战斗宝可梦与备战宝可梦互换。" },
		},
	],
	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: { 'zh-cn': "恶梦" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【睡眠】状态。" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [94],
}

export default card
