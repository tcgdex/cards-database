import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "布拨"
	},
	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [921],
	hp: 50,
	types: ["Lightning"],
	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'zh-cn': "劈啪作响"
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
	retreat: 1,
	regulationMark: "G",
}

export default card
