import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Exeggcute",
		fr: "Lainergie",
		de: "Waaty"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [102],

	hp: 50,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Mareep",
		fr: "Wattouat"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Eggsplosion",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: "10×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Energy Support",
				fr: "Secousse tonnerre",
				de: "Donnerrüttler"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Psychic Energy card and attach it to 1 of your Benched Pokémon. Shuffe your deck afterward.",
				fr: "Lancez une pièce. Si c'est pile, Lainergie s'inflige 20 dégâts.",
				de: "Wirf eine Münze. Bei 'Zahl' fügt sich Waaty selber 20 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85475,
				cardmarket: 274952
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
