import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [390],
	set: Set,

	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'es-es': "Chimchar",
		'it-it': "Chimchar",
		'pt-br': "Chimchar",
		'de-de': "Panflam"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche",
			'es-es': "Ascuas",
			'it-it': "Braciere",
			'pt-br': "Brasa",
			'de-de': "Glut"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608474,
				tcgplayer: 263723
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608474,
				tcgplayer: 263723
			}
		},
	],
}

export default card
