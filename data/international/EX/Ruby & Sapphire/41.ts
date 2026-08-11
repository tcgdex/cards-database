import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio",
		'de-de': "Moorabbel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [259],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou"
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
				'en-us': "When you attach a Water Energy card from your hand to Marshtomp, remove all Special Conditions from Marshtomp.",
				'fr-fr': "Lorsque vous attachez une carte Énergie  de votre main à Flobio, retirez-lui tous ses États Spéciaux.",
				'de-de': "Wenn du eine -Energiekarte an Moorabbel anlegst, verlieren alle Speziellen Zustände auf Moorabbel ihre Wirkung."
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
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
				'de-de': "Aquaschall"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verringert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275689,
				tcgplayer: 87233
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275689,
				tcgplayer: 87233
			}
		},
	],

}

export default card
