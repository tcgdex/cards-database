import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [757],
	set: Set,

	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

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
			'pt-br': "Descarte uma Energia deste Pokémon.",
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785876,
				tcgplayer: 567249
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785876,
				tcgplayer: 567249
			}
		},
	],

	illustrator: "Felicia Chen",

}

export default card
