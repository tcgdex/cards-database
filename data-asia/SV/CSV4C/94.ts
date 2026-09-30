import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "嗡蝠"
	},
	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [714],
	hp: 70,
	types: ["Dragon"],
	attacks: [
		{
			cost: ["Psychic", "Darkness"],
			name: {
				'zh-cn': "起风"
			},
			damage: "40",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
