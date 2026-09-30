import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "具甲武者ex"
	},
	illustrator: "Oku",
	rarity: "Special illustration rare",
	category: "Pokemon",
	set: Set,
	dexId: [768],
	hp: 270,
	types: ["Water"],
	suffix: "ex",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "水流锋刃"
			},
			damage: "70",
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'zh-cn': "一刀脱离"
			},
			effect: {
				'zh-cn': "选择这只宝可梦身上附着的1个能量，放于弃牌区。然后，将这只宝可梦与备战宝可梦互换。"
			},
			damage: "170",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
}

export default card
