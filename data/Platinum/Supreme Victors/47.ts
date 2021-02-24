import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		321,
	],
	hp: 180,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rest",
				fr: "Repos",
			},
			effect: {
				en: "Remove all Special Conditions and 4 damage counters from Wailord. Wailord is now Asleep.",
				fr: "Retirez à Wailord tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Wailord est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Wave",
				fr: "Vague géante",
			},
			effect: {
				en: "Wailord can't use Giant Wave during your next turn.",
				fr: "Wailord ne peut pas utiliser Vague géante lors de votre prochain tour.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
