import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "三海地鼠"
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [961],
	hp: 90,
	types: ["Water"],
	attacks: [
		{
			cost: ["Water"],
			name: {
				'zh-cn': "缠绕榨取"
			},
			effect: {
				'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。"
			},
			damage: "50",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
