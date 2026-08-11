import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [155],
	set: Set,

	name: {
		'en-us': "Ethan's Cyndaquil",
		'fr-fr': "Héricendre de Luth",
		'de-de': "Klarins Feurigel",
		'it-it': "Cyndaquil di Armonio",
		'es-es': "Cyndaquil de Eco",
		'pt-br': "Cyndaquil do Ethan",
		'es-mx': "Cyndaquil de Ethan"
	},

	illustrator: "Susumu Maeya",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche",
			'de-de': "Glut",
			'it-it': "Braciere",
			'es-es': "Ascuas",
			'pt-br': "Brasa",
			'es-mx': "Brasas"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
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
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825905,
				tcgplayer: 632854
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825905,
				tcgplayer: 632854
			}
		},
	],
}

export default card
