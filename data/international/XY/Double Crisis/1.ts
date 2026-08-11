import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Numel",
		'fr-fr': "Chamallot de la Team Magma",
		'pt-br': "Numel da Equipe Magma",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'pt-br': "Brasa",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "No matter how heavy the cargo, we can transport it to our destination with ease, thanks to Numel.",
	},

	thirdParty: {
		cardmarket: 282512,
		tcgplayer: 97047
	}
}

export default card
