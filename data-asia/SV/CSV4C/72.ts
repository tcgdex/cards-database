import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "盐石宝"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [932],
	hp: 70,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'zh-cn': "涂盐"
			},
			effect: {
				'zh-cn': "回复自己1只宝可梦「20」HP。"
			},
		},
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'zh-cn': "撞击"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
