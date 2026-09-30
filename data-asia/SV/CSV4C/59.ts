import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "苍炎刃鬼"
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [937],
	hp: 140,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "生命汲取者"
			},
			effect: {
				'zh-cn': "回复这只宝可梦「30」HP。"
			},
			damage: "50",
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'zh-cn': "斗志大剑"
			},
			effect: {
				'zh-cn': "如果对手的战斗宝可梦是「宝可梦【ex】・V」的话，则追加造成100伤害。"
			},
			damage: "100+",
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
