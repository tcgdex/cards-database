import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雷伊布",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "带电" },
			effect: { 'zh-cn': "选择自己弃牌区中的1张【雷】能量，附着于这只宝可梦身上。" },
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: { 'zh-cn': "打雷" },
			effect: { 'zh-cn': "给这只宝可梦也造成30点伤害。" },
			damage: 160,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 0,
	regulationMark: "D",
	rarity: "Common",
	dexId: [135],
}

export default card
