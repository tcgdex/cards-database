import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina",
		de: "Nidorina"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidoran ♀",
		fr: "Nidoran"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fast Evolution",
				fr: "Évolution fulgurante",
				de: "Schnelle Evolution"
			},
			effect: {
				en: "Search your deck for up to 2 Evolution cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes Évolution, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Evolutionskarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276216,
				tcgplayer: 87735
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276216,
				tcgplayer: 87735
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				cardmarket: 871515,
				tcgplayer: 477559
			},
		},
	],
}

export default card
