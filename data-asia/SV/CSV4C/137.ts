import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "比比鸟"
	},
	illustrator: "Jerky",
	rarity: "Illustration rare",
	category: "Pokemon",
	set: Set,
	dexId: [17],
	hp: 90,
	types: ["Colorless"],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "翅膀攻击"
			},
			damage: "40",
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
