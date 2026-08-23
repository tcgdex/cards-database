import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "宝石海星",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "海星星",
	},
	description: {
		'zh-cn': "会高速旋转着身体一边游泳一边吸收微小的浮游生物。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "神秘彗星" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。给对手的1只宝可梦身上，放置2个伤害指示物。然后，将这只宝可梦，以及放于其身上的所有卡牌，放于弃牌区。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "高速攻击" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [121],
}

export default card
