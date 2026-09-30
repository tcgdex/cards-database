import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "爱吃豚"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [915],
	hp: 70,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "鲁莽头击"
			},
			damage: "10",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "泥巴射击"
			},
			damage: "20",
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
