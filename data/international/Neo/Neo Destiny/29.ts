import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Unown [W]",
		'fr-fr': "Zarbi W",
		'de-de': "Icognito W"
	},

	illustrator: "CR CG gangs",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "[Want]",
				'fr-fr': "[Want]",
				'de-de': "Want"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have Unown W, Unown A, Unown N, and Unown T on your Bench, you may flip a coin. If heads, put a Trainer card from your discard pile into your hand.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [W], Zarbi [A], Zarbi [N] et Zarbi [T] sur votre Banc, vous pouvez lancer une pièce. Si c'est face, ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				'de-de': "Once during your turn (before your attack), if you have Unown W, Unown A, Unown N, and Unown T on your Bench, you may flip a coin. If heads, put a Trainer card from your discard pile into your hand."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

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
		'en-us': "It is believed that the variety of types of this Pokémon were created by evolutionary adaptation, as each possesses a different ability.",
		'fr-fr': "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274681,
				tcgplayer: 90240
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274681,
				tcgplayer: 90240
			}
		}
	]
}

export default card
