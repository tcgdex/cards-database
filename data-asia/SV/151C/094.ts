import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "耿鬼",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "鬼斯通",
	},
	description: {
		'zh-cn': "会藏进猎物的影子里，然后悄悄地等待夺取性命的机会到来。",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "灵骚" },
			effect: { 'zh-cn': "查看对手的手牌，造成其中训练家张数×50伤害。" },
			damage: "50×",
		},
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "幽魂俯冲" },
			effect: { 'zh-cn': "将3个伤害指示物，以任意方式放置于对手的备战宝可梦身上。" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [94],
}

export default card
