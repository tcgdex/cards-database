import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Lost Remover",
		'fr-fr': "Nettoyeur perdu",
		'de-de': "Nirgendwo-Entferner"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Put 1 Special Energy card attached to 1 of your opponent's Pokémon in the Lost Zone.",
		'fr-fr': "Placez 1 carte Énergie spéciale attachée à l’un des Pokémon de votre adversaire dans la Zone Perdue.",
		'de-de': "Lege 1 Spezialenergiekarte, die an 1 Pokémon deines Gegners angelegt ist, ins Nirgendwo."
	},

	trainerType: "Item",

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86829,
				cardmarket: 279723
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86829,
				cardmarket: 279723
			},
		},
	],

}

export default card
