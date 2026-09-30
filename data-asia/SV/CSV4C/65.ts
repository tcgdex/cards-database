import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "火暴猴"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [57],
	hp: 110,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'zh-cn': "踢倒"
			},
			damage: "30",
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'zh-cn': "痛打一顿"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则追加造成60伤害。"
			},
			damage: "60+",
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
