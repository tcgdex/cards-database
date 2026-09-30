import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "猴怪"
	},
	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [56],
	hp: 60,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'zh-cn': "踢倒"
			},
			damage: "10",
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'zh-cn': "垂吊"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
