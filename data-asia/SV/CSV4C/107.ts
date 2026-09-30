import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "哈约克"
	},
	illustrator: "Kariya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [507],
	hp: 90,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "后踢"
			},
			damage: "30",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "头突"
			},
			damage: "50",
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
