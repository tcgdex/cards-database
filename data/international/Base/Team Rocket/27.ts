import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Machamp",
		'fr-fr': "Mackogneur obscur",
		'de-de': "Dunkles Machomei"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur obscur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Mega Punch",
				'fr-fr': "Ultimapoing",
				'de-de': "Megahieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Fling",
				'fr-fr': "Lancer",
				'de-de': "Austoben"
			},
			effect: {
				'en-us': "Your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck. This attack can't be used if your opponent has no Benched Pokémon.",
				'fr-fr': "Votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées à son deck. Cette attaque ne peut être utilisée si votre adversaire n'a pas de Pokémon sur son Banc.",
				'de-de': "Dein Gegnermischt sein oder ihr aktives Pokémon und alle darauf abgelegten Karten in sein oder ihr Deck. Dieser Angriff kann nicht gespielt werden, falls dein Gegner keine Pokémon auf derBank hat."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "It is almost impossible to defend against a Machamp's four powerful arms.",
		'fr-fr': "Il est pratiquement impossible de se défendre contre les quatre bras d'un Mackogneur."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274063,
				tcgplayer: 84620
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274063,
				tcgplayer: 84620
			}
		}
	]
}

export default card
