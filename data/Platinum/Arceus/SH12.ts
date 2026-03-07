import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Shinx",
		de: "Sheinux"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		403,
	],
	
	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Star Barrier",
				de: "Sternenbarriere"
			},
			effect: {
				en: "As long as Shinx has any Energy attached to it, Shinx has no Weakness.",
				de: "Solange an Sheinux mindestens 1 Energie angelegt ist, hat Sheinux keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Payback",
				de: "Gegenstoß"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 30 more damage.",
				de: "Wenn dein Gegner nur 1 Preis übrig hat, fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278872
	},

	variants: [
		{
			type: "reverse"
		}
	]
}

export default card
