import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "太阳伊布"
	},
	illustrator: "Cona Nitanda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [196],
	hp: 110,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "精神伤害"
			},
			effect: {
				'zh-cn': "追加造成对手战斗宝可梦身上放置的伤害指示物数量×10伤害。"
			},
			damage: "30+",
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "念力"
			},
			effect: {
				'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。"
			},
			damage: "60",
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
	retreat: 1,
	regulationMark: "G",
}

export default card
