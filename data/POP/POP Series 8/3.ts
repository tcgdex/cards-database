import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Luxray",
		de: "Luxtra"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Luxio",
		de: "Luxio"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
				de: "Beeindruckende Fangzähne"
			},
			effect: {
				en: "As long as Luxray is your Active Pokémon, any damage done by an opponent’s attack is reduced by 10 (before applying Weakness and Resistance).",
				de: "Solange Luxtra dein Aktives Pokémon ist, wird aller Schaden von gegnerischen Angriffen um 10 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
				de: "Donner"
			},
			effect: {
				en: "Flip a coin. If tails, Luxray does 40 damage to itself.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt sich Luxtra selbst 40 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		en: "When its eyes gleam gold, it can spot hiding prey–even those taking shelter behind a wall.",
		de: "Leuchten seine Augen golden auf, kann es Beute, die sich versteckt, sehen. Es kann durch Wände sehen."
	},

	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278404,
				tcgplayer: 86948
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 278404,
				tcgplayer: 86948
			}
		},
	],
}

export default card
