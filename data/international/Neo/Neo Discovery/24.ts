import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'de-de': "Hunduster"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],

			name: {
				'en-us': "Smog",
				'fr-fr': "Purédpois",
				'de-de': "Smog"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Collect Fire",
				'fr-fr': "Quête du feu",
				'de-de': "Feuersammeln"
			},
			effect: {
				'en-us': "If there are any Energy in your discard pile, choose 1 of them and attach it to Houndour.",
				'fr-fr': "S'il y a des cartes Énergie  dans votre pile de défausse, choisissez l'une d'entre elles et attachez-la à Malosse.",
				'de-de': "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wähle eine davon und lege sie an Hunduster an."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "To corner prey, they check each other's location using barks that only they can understand.",
		'fr-fr': "Pour traquer leur proie, ils se localisent mutuellement avec des aboiements compris par eux seuls."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274516,
				tcgplayer: 86217
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274516,
				tcgplayer: 86217
			}
		}
	]
}

export default card

