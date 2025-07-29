import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		de: "Venuflibis"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drawup Power",
				fr: "Pouvoir bloquant",
				de: "Kraft aufziehen"
			},
			effect: {
				en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck anschließend."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spit Up",
				fr: "Relâche",
				de: "Entfessler"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It walks around on its tentacles in search of a tree branch where it can dangle down and ambush prey."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279202
	}
}

export default card
