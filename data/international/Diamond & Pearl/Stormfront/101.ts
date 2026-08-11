import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'de-de': "Glumanda"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 50,

	types: [
		"Fire",
	],

	evolveFrom: {
		'fr-fr': "Salamèche",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Discard a fire Energy attached to Charmander.",
				'fr-fr': "Défaussez une Énergie Fire attachée à Salamèche.",
				'de-de': "Lege 1 an Glumanda angelegte -Energie auf deinen Ablagestapel."
			},
			damage: 30,

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
		'en-us': "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
		'fr-fr': "Depuis sa naissance, une petite flamme brûle au bout de sa queue. Si cette flamme s'éteint, la vie de ce Pokémon s'éteindra elle aussi."
	},

	thirdParty: {
		cardmarket: 278399,
		tcgplayer: 84216
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
