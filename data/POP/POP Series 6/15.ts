import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Piplup",
		de: "Plinfa"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [393],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Spash",
				fr: "Éclaboussure",
				de: "Wasserplatscher"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	description: {
		en: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
		de: "Es ist sehr stolz und nimmt daher kein Futter von anderen an. Seine dicken Daunen schützen vor Kälte."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88143,
				cardmarket: 277900
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88143,
				cardmarket: 277900
			},
		},
	],

}

export default card
