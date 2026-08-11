import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Unown [V]",
		'fr-fr': "Zarbi V",
		'de-de': "Icognito V"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
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
				'en-us': "[Vanish]",
				'fr-fr': "Vanish",
				'de-de': "Vanish"
			},
			effect: {
				'en-us': "When you play Unown V from your hand, you may flip a coin. If heads, return 1 of your Pokémon with Unown in its name (other than Unown V) to your hand. (Discard all cards attached to that card.)",
				'fr-fr': "Quand vous jouez Zarbi [V] depuis votre main, vous pouvez lancer une pièce. Si c'est face, renvoyez 1 de vos Pokémon Zarbi (autre que Zarbi [V]) dans votre main. (Défaussez-vous de toutes les cartes attachées à ce Pokémon.)",
				'de-de': "When you play Unown V from your hand, you may flip a coun. If heads, return 1 of your Pokémon with Unown in its name (other than Unown V) to your hand. (Discard all cards attached to that card.)"
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
				cardmarket: 274741,
				tcgplayer: 90238
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274741,
				tcgplayer: 90238
			}
		}
	]
}

export default card
