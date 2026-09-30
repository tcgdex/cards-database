import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "虫滚泥"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [953],
	hp: 50,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "滚球"
			},
			effect: {
				'zh-cn': "抛掷硬币直到出现反面，造成正面次数×30伤害。"
			},
			damage: "30×",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
