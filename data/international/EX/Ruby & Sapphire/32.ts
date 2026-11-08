import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'de-de': "Reptain"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [253],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Natural Cure",
				'fr-fr': "Remède naturel",
				'de-de': "Innere Kraft"
			},
			effect: {
				'en-us': "When you attach a Grass Energy card from your hand to Grovyle, remove all Special Conditions from Grovyle.",
				'fr-fr': "Lorsque vous attachez une carte Énergie  de votre main à Massko, retirez-lui tous ses États Spéciaux.",
				'de-de': "Wenn du eine -Energiekarte von der Hand an Reptain anlegst, verlieren alle Speziellen Zustände auf Reptain ihre Wirkung."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275680,
				tcgplayer: 85936
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275680,
				tcgplayer: 85936
			}
		},
	],

}

export default card
