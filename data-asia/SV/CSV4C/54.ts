import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "念力土偶"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [344],
	hp: 120,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "土偶爆炸"
			},
			effect: {
				'zh-cn': "在对手战斗宝可梦身上放置伤害指示物，直到其剩余HP变为「10」为止。然后，给这只宝可梦造成120伤害。"
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "精神幻觉"
			},
			effect: {
				'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。"
			},
			damage: "30",
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
	retreat: 2,
	regulationMark: "G",
}

export default card
