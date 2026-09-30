import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "猫鼬斩"
	},
	illustrator: "Yuya Oka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [335],
	hp: 90,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "劈开"
			},
			damage: "40",
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
