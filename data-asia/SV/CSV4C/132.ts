import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "海豚侠"
	},
	illustrator: "Akira Komayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	set: Set,
	dexId: [964],
	hp: 150,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "喷射拳"
			},
			effect: {
				'zh-cn': "给对手的1只备战宝可梦，也造成30伤害。[备战宝可梦不计算弱点、抗性。]"
			},
			damage: "30",
		},
		{
			cost: ["Water", "Water"],
			name: {
				'zh-cn': "正义踢"
			},
			effect: {
				'zh-cn': "在这个回合，如果这只宝可梦没有从备战区被放于战斗场上的话，则这个招式失败。"
			},
			damage: "210",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
