import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Evoli Niv. 10",
		de: "Evoli"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Signs of Evolution",
				fr: "Signes d'evolution",
				de: "Spuren der Evolution"
			},
			effect: {
				en: "Search your deck for up to 2 cards that evolve from Eevee, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes qui évoluent d'Evoli. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten, die sich aus Evoli entwickeln, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Faire des bonds",
				de: "Sprungfeder"
			},
			effect: {
				en: "Switch Eevee with 1 of your Benched Pokémon.",
				fr: "Échangez Evoli avec 1 des Pokémon de votre Banc.",
				de: "Tausche Evoli gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278633,
		tcgplayer: 85086
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
