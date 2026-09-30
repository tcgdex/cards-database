import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "索财灵"
	},
	illustrator: "Akira Komayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	set: Set,
	dexId: [999],
	hp: 70,
	types: ["Psychic"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "连掷硬币"
			},
			effect: {
				'zh-cn': "抛掷硬币直到出现反面，造成正面次数×20伤害。"
			},
			damage: "20×",
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
