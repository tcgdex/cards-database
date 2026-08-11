import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Unown [Z]",
		'fr-fr': "Zarbi Z",
		'de-de': "Icognito Z"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
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
				'en-us': "[Zoom]",
				'fr-fr': "[Zoom]",
				'de-de': "Zoom"
			},
			effect: {
				'en-us': "As long as Unown Z is Benched, you pay no Energy cost to retreat a Pokémon with Unown in its name.",
				'fr-fr': "Tant que Zarbi [Z] est sur votre Banc, vous ne payez aucun coût d'Énergie pour faire battre en retraite vos Pokémon Zarbi.",
				'de-de': "As long as Unwon Z is benched, you may pay no Energy cost to retreat Pokémon with Unown in its name."
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
				cardmarket: 274712,
				tcgplayer: 90246
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274712,
				tcgplayer: 90246
			}
		}
	]
}

export default card
