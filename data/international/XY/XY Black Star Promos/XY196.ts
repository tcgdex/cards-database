import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Genesect",
		'fr-fr': "Genesect"
	},

	illustrator: "PLANETA",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		649,
	],

	hp: 110,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Linear Attack",
				'fr-fr': "Attaque Linéaire"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Destructor Beam",
				'fr-fr': "Rayon Destructeur"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
	},

	thirdParty: {
		cardmarket: 295149
	}
}

export default card
