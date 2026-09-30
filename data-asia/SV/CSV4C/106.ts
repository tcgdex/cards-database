import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "小约克"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [506],
	hp: 50,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "后踢"
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
