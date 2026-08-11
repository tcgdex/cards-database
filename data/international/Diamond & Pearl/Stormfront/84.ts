import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Déplacez une carte Énergie de base attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon.",
		'de-de': "Lege 1 Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278382,
		tcgplayer: 85258
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
