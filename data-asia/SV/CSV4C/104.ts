import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "青绵鸟"
	},
	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [333],
	hp: 50,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "绵绵防守"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-20」。"
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "振翅"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
