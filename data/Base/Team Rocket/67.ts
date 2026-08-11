import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Afternoon Nap",
				fr: "Siestre",
				de: "Nickerchen"
			},
			effect: {
				en: "Search your deck for a Energy card and attach it to Slowpoke. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie  dans votre deck et attachez-la à Ramoloss. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach einer {P}-Energiekarte und lege sie unter Flegmon. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Although it knows how to fish, no other intelligent behavior has been detected in it.",
		fr: "Bien qu'il sache pêcher, il fait preuve de rès peu d'intelligence.",
		de: "Obwohl es weiß, wie man Fische fängt, konnte kein anderes intelligentes Verhalten bei ihm festgestellt werden."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274120,
				tcgplayer: 89322
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274120,
				tcgplayer: 89322
			}
		}
	]
}

export default card
