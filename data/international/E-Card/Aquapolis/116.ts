import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'de-de': "Vulpix"
	},

	illustrator: "Keiko Fukuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Collect Fire",
				'fr-fr': "Quête du feu",
				'de-de': "Feuersammeln"
			},
			effect: {
				'en-us': "If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Vulpix.",
				'fr-fr': "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Goupix.",
				'de-de': "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei \"Kopf\" 1 davon an Vulpix an."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90435,
				cardmarket: 275192
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90435,
				cardmarket: 275192
			}
		},
	]
}

export default card
