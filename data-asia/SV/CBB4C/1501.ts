import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "泡沫栗鼠",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "敲打" },
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "扫除" },
			effect: { 'zh-cn': "选择放于对手场上宝可梦身上最多2张「宝可梦道具」，放于弃牌区。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [572],
}

export default card
