import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "热辣娃"
	},
	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [951],
	hp: 70,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'zh-cn': "二连头锤"
			},
			effect: {
				'zh-cn': "抛掷2次硬币，造成正面次数×50伤害。"
			},
			damage: "50×",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
