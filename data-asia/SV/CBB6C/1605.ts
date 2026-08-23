import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "穿着熊",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "童偶熊",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "力量充能" },
			effect: { 'zh-cn': "选择自己牌库中的1张基本能量，附着于这只宝可梦身上。并重洗牌库。" },
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "头突" },
			damage: 130,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [760],
}

export default card
