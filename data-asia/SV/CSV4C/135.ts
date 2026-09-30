import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "噗隆隆"
	},
	illustrator: "Souichirou Gunjima",
	rarity: "Illustration rare",
	category: "Pokemon",
	set: Set,
	dexId: [965],
	hp: 60,
	types: ["Metal"],
	attacks: [
		{
			cost: ["Metal"],
			name: {
				'zh-cn': "回转抽取"
			},
			effect: {
				'zh-cn': "从自己牌库上方抽取1张卡牌。"
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
