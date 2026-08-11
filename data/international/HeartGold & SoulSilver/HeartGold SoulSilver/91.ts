import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d’Énergie",
		'de-de': "Energie-Umschalter"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Prenez une carte Énergie de base attachée à l’un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
		'en-us': "Move a basic Energy card attached 1 of your Pokémon to another of your Pokémon.",
		'de-de': "Lege 1 Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon an."
	},

	trainerType: "Item",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85259,
				cardmarket: 279063
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85259,
				cardmarket: 279063
			}
		},
	],

}

export default card
