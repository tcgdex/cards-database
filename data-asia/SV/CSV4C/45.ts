import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "波克比"
	},
	illustrator: "Natsumi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [175],
	hp: 50,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "撒娇之声"
			},
			effect: {
				'zh-cn': "在不看正面的前提下选择对手1张手牌，查看该卡牌的正面后，放回对手牌库并重洗牌库。"
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "滚动冲撞"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
