import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'de-de': "Camaub"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [322],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flare Bonus",
				'fr-fr': "Bonus d’intimidation",
				'de-de': "Flammenbonus"
			},
			effect: {
				'en-us': "Discard a Fire Energy card from your hand. Then, draw 3 cards.",
				'fr-fr': "Défaussez une carte Énergie Fire de votre main. Ensuite, piochez 3 cartes.",
				'de-de': "Lege 1 -Energiekarte von deiner Hand auf deinen Ablagestapel. Ziehe danach 3 Karten."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Glühen"
			},

			damage: 40,

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
		'en-us': "The flaming magma it stores in the hump on its back is the source of its tremendous power."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87816,
				cardmarket: 279191
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87816,
				cardmarket: 279191
			}
		},
	],

}

export default card
