import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "皮宝宝"
	},
	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [173],
	hp: 30,
	types: ["Psychic"],
	attacks: [
		{
			name: {
				'zh-cn': "握握抽取"
			},
			effect: {
				'zh-cn': "从牌库上方抽取卡牌，直到自己的手牌变为7张为止。"
			},
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",
}

export default card
