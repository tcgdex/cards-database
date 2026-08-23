import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "三合一磁怪",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "小磁怪",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "过量放电" },
			effect: { 'zh-cn': "在自己的回合可以使用1次，如果使用了，则令这只宝可梦【昏厥】。选择自己弃牌区中最多3张基本能量，以任意方式附着于自己的【雷】宝可梦身上。" },
		},
	],
	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: { 'zh-cn': "雷电球" },
			damage: 40,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [82],
}

export default card
