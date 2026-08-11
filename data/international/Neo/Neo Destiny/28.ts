import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Unown [H]",
		'fr-fr': "Zarbi H",
		'de-de': "Icognito H"
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
				'en-us': "[Help]",
				'fr-fr': "Help",
				'de-de': "Help"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have Unown H, Unown E, Unown L, and Unown P on your Bench, you may shuffle your hand into your deck, then draw a new hand of the same number of cards.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [H], Zarbi [E], Zarbi [L] et Zarbi [P] sur votre Banc, vous pouvez mélanger votre main à votre deck et piocher une nouvelle main ayant le même nombre de cartes que la précédente.",
				'de-de': "Du kannst immer einmal in deinem Zug (vor deinem Angriff), wenn du Icognito H, Icognito E, Icognito L und Icognito P auf deiner Bank hast, die Karten auf deiner Hand in dein Deck mischen und danach genauso viele Karten neu ziehen."
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
				cardmarket: 274680,
				tcgplayer: 90211
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274680,
				tcgplayer: 90211
			}
		}
	]
}

export default card
