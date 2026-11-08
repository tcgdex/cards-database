import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse",
		'de-de': "Damhirplex"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Screechy Voice",
				'fr-fr': "Voix stridente",
				'de-de': "Screechy Voice"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Push Away",
				'fr-fr': "Mettre à l'écart",
				'de-de': "Push Away"
			},
			effect: {
				'en-us': "Look at your opponent's hand, choose a Trainer card you find there, and discard it.",
				'fr-fr': "Regardez la main de votre adversaire, choisissez une carte Dresseur et défaussez-la.",
				'de-de': "Look at your opponent's hand, choose a Trainer card you find there, and discard it."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89503,
				cardmarket: 276678
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89503,
				cardmarket: 276678
			},
		}
	],
}

export default card
