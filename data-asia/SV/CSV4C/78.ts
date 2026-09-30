import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "偶叫獒"
	},
	illustrator: "DOM",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [942],
	hp: 60,
	types: ["Darkness"],
	attacks: [
		{
			cost: ["Darkness"],
			name: {
				'zh-cn': "猛袭"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则追加造成20伤害。"
			},
			damage: "10+",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
