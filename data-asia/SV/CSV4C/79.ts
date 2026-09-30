import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "獒教父"
	},
	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [943],
	hp: 140,
	types: ["Darkness"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "复仇"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，当这只宝可梦受到招式的伤害时，将与受到的伤害数值相同的伤害指示物，放置于使用了招式的宝可梦身上。"
			},
			damage: "20",
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'zh-cn': "暗之牙"
			},
			damage: "100",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
