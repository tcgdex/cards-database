import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "变隐龙",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "变隐高手" },
			effect: { 'zh-cn': "当这只宝可梦受到招式的伤害时，自己抛掷1次硬币。如果为正面，则这只宝可梦不受到该伤害。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "舌头鞭打" },
			effect: { 'zh-cn': "给对手的1只宝可梦，造成30伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [352],
}

export default card
