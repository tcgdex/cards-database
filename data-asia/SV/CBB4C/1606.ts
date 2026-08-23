import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "奇诺栗鼠",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "泡沫栗鼠",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "重掴" },
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "特殊滚动" },
			effect: { 'zh-cn': "造成这只宝可梦身上附着的特殊能量张数×70伤害。" },
			damage: "70×",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [573],
}

export default card
