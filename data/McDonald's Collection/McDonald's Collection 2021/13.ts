import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Tepig",
		fr: "Gruikui",
		de: "Floink"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		498,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Glut"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
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

	retreat: 2,

	description: {
		en: "It blows fire through its nose. When it catches a cold, the fire becomes pitch-black smoke instead.",
		de: "Es schießt Flammen aus seinem Rüssel. Ist es erkältet, kommt statt Feuer aber nur pechschwarzer Rauch zum Vorschein."
	},
	
	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538898,
				tcgplayer: 232328
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538903,
				tcgplayer: 232328
			}
		}
	]
}

export default card

