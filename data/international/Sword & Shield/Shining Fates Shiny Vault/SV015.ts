import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [813],
	set: Set,

	name: {
		'fr-fr': "Flambino",
		'en-us': "Scorbunny",
		'es-es': "Scorbunny",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny",
		'de-de': "Hopplo"
	},

	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			'fr-fr': "Flammèche",
			'en-us': "Ember",
			'es-es': "Ascuas",
			'it-it': "Braciere",
			'pt-br': "Brasa",
			'de-de': "Glut"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'en-us': "Discard an Energy from this Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It has special pads on the backs of its feet, and one on its nose. Once it's raring to fight, these pads radiate tremendous heat."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539463,
				tcgplayer: 232362
			}
		},
	],
}

export default card
