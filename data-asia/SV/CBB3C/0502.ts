import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "黑鲁加",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "戴鲁比",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "锐利之牙" },
			damage: 30,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { 'zh-cn': "大字爆炎" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的1个能量，放于弃牌区。" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [229],
}

export default card
