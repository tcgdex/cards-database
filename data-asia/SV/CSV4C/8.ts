import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "奥利瓦"
	},
	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [930],
	hp: 140,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "治愈果实"
			},
			effect: {
				'zh-cn': "将自己的1只备战宝可梦的HP，全部回复。"
			},
		},
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "喷油射击"
			},
			damage: "90",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
