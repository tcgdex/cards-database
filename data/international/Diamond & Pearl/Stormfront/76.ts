import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'de-de': "Skunkapuh"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		434,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'fr-fr': "Moufouette",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Gnaw and Run",
				'fr-fr': "Ronger et courrir",
				'de-de': "Annagen und Abhauen"
			},
			effect: {
				'en-us': "Switch Stunky with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Moufouette avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Skunkapuh gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double écorchure",
				'de-de': "Doppelkratzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.",
		'fr-fr': "Il se protège en expulsant un fluide nocif par son derrière. La puanteur dure 24 heures."
	},

	thirdParty: {
		cardmarket: 278374,
		tcgplayer: 89586
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
