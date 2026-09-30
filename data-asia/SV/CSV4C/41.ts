import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "电肚蛙"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [939],
	hp: 130,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'zh-cn': "电气子弹"
			},
			effect: {
				'zh-cn': "给对手的1只备战宝可梦，也造成30伤害。[备战宝可梦不计算弱点、抗性。]"
			},
			damage: "70",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
