import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "飘香豚"
	},
	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [916],
	hp: 120,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "摇晃芬芳"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。"
			},
			damage: "30",
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "嵌入踢"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为反面，则给这只宝可梦也造成60伤害。"
			},
			damage: "160",
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
