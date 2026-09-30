import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "木棉球"
	},
	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [546],
	hp: 60,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "随性攻击"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为反面，则这个招式失败。"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
