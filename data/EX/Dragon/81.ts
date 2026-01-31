import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Wurmple",
		fr: "Chenipotte",
		de: "Waumpel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 50,

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
				en: "Call for Friends",
				fr: "À la rescousse !",
				de: "Freundesruf"
			},
			effect: {
				en: "Search your deck for Grass Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward.\"",
				fr: "Cherchez dans votre deck des Pokémon de base  et placez-en autant que vous le voulez sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach -Basis-Pokémon-Karten und lege beliebig viele von ihnen auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "String Shot",
				fr: "Sécrétion",
				de: "Fadenschuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275958,
		tcgplayer: 90648
	}
}

export default card
