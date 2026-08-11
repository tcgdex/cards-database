import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "M Beedrill-EX",
		'fr-fr': "M-Dardargnan-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		15,
	],
	hp: 200,
	types: [
		"Grass",
	],
	evolveFrom: {
		'en-us': "Beedrill-EX",
		'fr-fr': "Dardargnan-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Hazard Stinger",
				'fr-fr': "Dard Dangereux"
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon. Your opponent's Active Pokémon is now Paralyzed and Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
