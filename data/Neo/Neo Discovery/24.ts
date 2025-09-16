import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Houndour",
		fr: "Malosse",
		de: "Hunduster"
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
				en: "Smog",
				fr: "Purédpois",
				de: "Smog"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 10
		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Collect Fire",
				fr: "Quête du feu",
				de: "Feuersammeln"
			},
			effect: {
				en: "If there are any Energy in your discard pile, choose 1 of them and attach it to Houndour.",
				fr: "S'il y a des cartes Énergie  dans votre pile de défausse, choisissez l'une d'entre elles et attachez-la à Malosse.",
				de: "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wähle eine davon und lege sie an Hunduster an."
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

	description: {
		fr: "Pour traquer leur proie, ils se localisent mutuellement avec des aboiements compris par eux seuls."
	},

	thirdParty: {
		cardmarket: 274516,
		tcgplayer: 86217
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

