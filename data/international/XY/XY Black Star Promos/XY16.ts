import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Gogoat",
		'fr-fr': "Chevroum",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		673,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Recul",
			},
			effect: {
				'en-us': "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Forest Press",
				'fr-fr': "Pression de la Forêt",
			},
			effect: {
				'en-us': "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Grass attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It can tell how its trainer is feeling by subtle shifts in the grip on its horns. This empathetic sense lets them run as if one being.",
	},

	thirdParty: {
		cardmarket: 281322
	}
}

export default card
