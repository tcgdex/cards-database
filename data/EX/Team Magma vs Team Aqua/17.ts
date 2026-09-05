import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Seviper",
		fr: "Seviper de Team Aqua",
		de: "Team Aquas Vipitis"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [336],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Freundesruf"
			},
			effect: {
				en: "Search your deck for a Grass Basic Pokémon or Basic Pokémon with Team Aqua in its name and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un Pokémon de base  ou un Pokémon de base dont le nom comporte Team Aqua et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einem {G} Basis-Pokémon oder einem Basis-Pokémon mit „Team Aqua“ im Namen und lege es auf die Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thick Poison",
				fr: "Poison épais",
				de: "Dickflüssiges Gift"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned. If tails, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt und vergiftet. Bei „Zahl“ ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 20,

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
			type: "normal",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 89798
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 89798
			}
		},
	],

}

export default card
