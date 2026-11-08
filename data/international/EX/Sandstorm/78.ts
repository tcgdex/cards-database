import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'de-de': "Knilz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [285],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growth Spurt",
				'fr-fr': "Jaillissement",
				'de-de': "Wachstumsschub"
			},
			effect: {
				'en-us': "Attach a Grass Energy card from your hand to Shroomish.",
				'fr-fr': "Attachez à Balignon une carte Énergie  de votre main.",
				'de-de': "Lege eine -Energiekarte von deiner Hand an Knilz an."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre Toxik",
				'de-de': "Giftpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

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
				cardmarket: 275855,
				tcgplayer: 89182
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275855,
				tcgplayer: 89182
			}
		},
	],

}

export default card
