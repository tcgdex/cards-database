import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		613,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sniffle",
				'fr-fr': "Reniflement",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Belt attack's base damage is 40.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base de l'attaque Taloche de ce Pokémon sont de 40.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Belt",
				'fr-fr': "Taloche",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its nose is always running. It sniffs the snot back up because the mucus provides the raw material for its moves.",
	},

	thirdParty: {
		cardmarket: 280261,
		tcgplayer: 84525
	}
}

export default card
