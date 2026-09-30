import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "老翁龙"
	},
	illustrator: "hatachu",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [780],
	hp: 120,
	types: ["Dragon"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "逆鳞"
			},
			effect: {
				'zh-cn': "追加造成这只宝可梦身上放置的伤害指示物数量×10伤害。"
			},
			damage: "60+",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
