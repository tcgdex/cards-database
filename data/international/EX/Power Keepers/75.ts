import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Déplacez une carte Énergie de base attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon.",
		'de-de': "Lege 1 Basis-Energiekarte, die an einem deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	thirdParty: {
		cardmarket: 277381,
		tcgplayer: 85256
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

