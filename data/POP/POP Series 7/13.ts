import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corsola",
		de: "Corasonn"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [222],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rally",
				fr: "Regroupement",
				de: "Mobilisieren"
			},
			effect: {
				en: "Search your deck for up to 3 different types of Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 3 types de Pokémon de base différents et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Pokémon-Karten unterschiedlichen Typs und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hook",
				fr: "Crochet",
				de: "Haken"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],
	description: {
		en: "Many live in the clean seas of the south. They apparently can’t live in polluted waters.",
		de: "Viele von ihnen leben in den sauberen Seen im Süden. In verschmutzten können sie nicht leben."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84442,
				cardmarket: 278045
			},
		},
	],

}

export default card
