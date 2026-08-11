import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		648,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Soprano Wave",
				'fr-fr': "Onde Soprano"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Entrancing Melody",
				'fr-fr': "Mélodie Envoûtante"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
	},

	thirdParty: {
		cardmarket: 295150
	}
}

export default card
