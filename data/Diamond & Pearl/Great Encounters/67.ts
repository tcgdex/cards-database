import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Feebas",
		fr: "Barpau",
		de: "Barschwa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		349,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				de: "Platscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Fast Evolution",
				fr: "Évolution fulgurante",
				de: "Schnelle Evolution"
			},
			effect: {
				en: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Évolution, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277969
	}
}

export default card
