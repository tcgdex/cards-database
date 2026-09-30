import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "独剑鞘"
	},
	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [679],
	hp: 60,
	types: ["Metal"],
	attacks: [
		{
			cost: ["Metal"],
			name: {
				'zh-cn': "切开"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
