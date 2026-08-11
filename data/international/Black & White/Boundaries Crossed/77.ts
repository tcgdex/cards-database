import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta",
		'es-es': "Meloetta",
		'it-it': "Meloetta",
		'pt-br': "Meloetta",
		'de-de': "Meloetta"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
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
				'en-us': "Psychic",
				'fr-fr': "Psyko",
			},
			effect: {
				'en-us': "Does 20 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Echoed Voice",
				'fr-fr': "Écho",
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

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
		'en-us': "The melodies sung by Meloetta have the power to make Pokémon that hear them happy or sad.",
	},

	thirdParty: {
		cardmarket: 280664,
		tcgplayer: 87299
	}
}

export default card
