import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "操陷蛛"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [918],
	hp: 120,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "丝线束缚"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。"
			},
			damage: "30",
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'zh-cn': "喷射头击"
			},
			damage: "100",
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
