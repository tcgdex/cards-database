import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
		'de-de': "Machomei"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [68],

	hp: 120,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Overzealous",
				'fr-fr': "Excès de zèle",
				'de-de': "Overzealous"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon-ex in play, each of Machamp's attacks do 30 more damage to the Defending Pokémon.",
				'fr-fr': "Si votre adversaire a des Pokémon-ex en jeu, les attaques de Mackogneur infligent 30 dégâts supplémentaires au Pokémon Défenseur.",
				'de-de': "If your opponent has any Pokémon-ex in play, each of Machamp's attacks do 30 more damage to the Defending Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Brick Smash",
				'fr-fr': "Casse-Brique",
				'de-de': "Brick Smash"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies, ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross Chop",
				'fr-fr': "Coup-croix",
				'de-de': "Cross Chop"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 60 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 60 damage plus 30 more damage."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86971,
				cardmarket: 276083
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 86971,
				cardmarket: 276083
			}
		},
		{
			type: "normal",
			stamp: ['national-championships'],
			thirdParty: {
				tcgplayer: 251241,
				cardmarket: 449903
			}
		},
		{
			type: "normal",
			stamp: ['national-championships', 'staff'],
			thirdParty: {
				tcgplayer: 265325
			}
		},
		{
			type: "normal",
			stamp: ["national-championships"],
			thirdParty: {
				cardmarket: 449903,
				tcgplayer: 251241
			}
		},
		{
			type: "normal",
			stamp: ["staff", "national-championships"],
			thirdParty: {
				tcgplayer: 265325
			}
		},
	]
}

export default card
