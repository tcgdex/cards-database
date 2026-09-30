import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "波克基古"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [176],
	hp: 90,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "和平共处"
			},
			effect: {
				'zh-cn': "双方玩家，各从牌库上方抽取3张卡牌。"
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "高速飞行"
			},
			damage: "40",
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
