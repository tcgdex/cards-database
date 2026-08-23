import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "超梦",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	description: {
		'zh-cn': "因重组了梦幻的遗传基因而诞生。据说有着所有宝可梦中最残暴的心。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "反射屏障" },
			effect: { 'zh-cn': "在下一个对手的回合，当这只宝可梦受到招式的伤害时，将与受到的伤害数值相同的伤害指示物，放置于使用了招式的宝可梦身上。" },
			damage: 20,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: { 'zh-cn': "精神打击" },
			effect: { 'zh-cn': "选择这只宝可梦身上附着的2个能量，放于弃牌区。" },
			damage: 130,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [150],
}

export default card
