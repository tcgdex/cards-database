import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "魔墙人偶",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	description: {
		'zh-cn': "擅长表演默剧。用手指放出的波动制造墙壁，保护自己免于大多数攻击。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "模仿屏障" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着的能量数量与对手战斗宝可梦身上附着的能量数量相同的话，则这只宝可梦，不受到对手宝可梦的招式的伤害。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "精神力量" },
			effect: { 'zh-cn': "将3个伤害指示物，以任意方式放置于对手的宝可梦身上。" },
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [122],
}

export default card
