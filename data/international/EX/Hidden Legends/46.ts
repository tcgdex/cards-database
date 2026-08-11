import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoferos",
		'de-de': "Rizeros"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [112],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Power Diffusion",
				'fr-fr': "Transmission de pouvoir",
				'de-de': "Power Diffusion"
			},
			effect: {
				'en-us': "As long as Rhydon is your Active Pokémon, prevent all damage done by attacks to all of your Benched Pokémon.",
				'fr-fr': "Tant que Rhinoféros est votre Pokémon Actif, prévenez tous les dégâts infligés par des attaques à vos Pokémon de Banc",
				'de-de': "As long as Rhydon is your Active Pokémon, prevent all damage done by attacks to all of your Benched Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'korne",
				'de-de': "Horn Drill"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Tail",
				'fr-fr': "Hyper-queue",
				'de-de': "Hyper Tail"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède des Poké-Powers ou des Poké-Bodies, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88732,
				cardmarket: 276120
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88732,
				cardmarket: 276120
			}
		},
		{
			type: "normal",
			stamp: ['michael-gonzalez'],
			thirdParty: {
				tcgplayer: 477575,
				cardmarket: 871532
			}
		},
	]
}

export default card
