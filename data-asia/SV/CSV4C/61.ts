import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "墓仔狗"
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [971],
	hp: 70,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "啃咬"
			},
			damage: "10",
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "幽魂射击"
			},
			damage: "20",
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
