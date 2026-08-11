import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh"
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [250],
	hp: 80,
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
				'en-us': "Combustion",
				'fr-fr': "Fournaise"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sacred Fire",
				'fr-fr': "Feu sacré"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,


	description: {
		'en-us': "A legend says that its body glows in seven colors. A rainbow is said to form behind when it flies."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275618,
				tcgplayer: 86125
			}
		},
	],

}

export default card
