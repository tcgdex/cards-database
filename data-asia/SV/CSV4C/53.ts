import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "天秤偶"
	},
	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [343],
	hp: 70,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "高速旋转"
			},
			effect: {
				'zh-cn': "将这只宝可梦与备战宝可梦互换。然后，对手将对手自己的战斗宝可梦与备战宝可梦互换。"
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
