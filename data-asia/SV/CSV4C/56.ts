import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "风妖精"
	},
	illustrator: "KYUPIYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [547],
	hp: 90,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "妖精之风"
			},
			damage: "50",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",
}

export default card
