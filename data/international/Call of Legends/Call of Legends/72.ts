import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'de-de': "Tangela"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [114],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Nutritional Support",
				'fr-fr': "Support nutritionnel",
				'de-de': "Nahrungsversorgung"
			},
			effect: {
				'en-us': "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck 1 carte Énergie Grass et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 -Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck anschließend."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
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
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89748,
				cardmarket: 279715
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89748,
				cardmarket: 279715
			},
		},
	],

}

export default card
