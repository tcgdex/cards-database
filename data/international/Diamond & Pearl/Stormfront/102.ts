import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard a fire Energy attached to Charmeleon.",
				'fr-fr': "Défaussez une Énergie Fire attachée à Reptincel.",
				'de-de': "Lege eine an Glutexo angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
		'fr-fr': "Il se sert de sa queue pour faire tomber ses adversaires. Une fois qu'ils sont au sol, il les lacère de ses griffes acérées."
	},

	thirdParty: {
		cardmarket: 278400,
		tcgplayer: 84232
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
