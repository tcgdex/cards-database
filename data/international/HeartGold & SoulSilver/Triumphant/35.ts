import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [93],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sneaky Placement",
				'fr-fr': "Placement vicieux",
				'de-de': "Heimlichtuerei"
			},
			effect: {
				'en-us': "Put 2 damage counters on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez 2 marqueurs de dégât sur l’un des Pokémon de votre adversaire.",
				'de-de': "Lege 2 Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Poison",
				'fr-fr': "Poison dodo",
				'de-de': "Schlafgift"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt und ist vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86031,
				cardmarket: 279565
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279565,
				tcgplayer: 86031
			}
		},
	],

}

export default card
