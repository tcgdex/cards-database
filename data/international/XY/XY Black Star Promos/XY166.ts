import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Gengar-EX",
		'fr-fr': "M-Ectoplasma-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 210,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Gengar-EX",
		'fr-fr': "Ectoplasma-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Hollow Geist",
				'fr-fr': "Ectoplasme Vaporeux"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned and Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,





}

export default card
