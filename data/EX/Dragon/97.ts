import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Rayquaza ex",
		fr: "Rayquaza ex",
		de: "Rayquaza-ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [384],

	hp: 100,

	stage: "Basic",
	types: [
		"Colorless"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spiral Growth",
				fr: "Croissance en spirale",
				de: "Spiralwachstum"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Rayquaza ex.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, cherchez dans votre deck une carte Énergie de base et attachez-la à Rayquaza ex.",
				de: "Wirf 1 Münze, bis du „Zahl“ wirfst. Jedesmal, wenn die Münze „Kopf“ zeigt, durchsuche deinen Ablagestapel nach 1 Basis-Energiekarte und lege sie an Rayquaza ex an."
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Dragon Burst",
				fr: "Jet de dragon",
				de: "Drachensalve"
			},
			effect: {
				en: "Discard either all Fire Energy or all Lightning Energy attached to Rayquaza ex. This attack does 40 damage times the amount of Fire or Lightning Energy discarded.",
				fr: "Défaussez soit toutes les Énergies  soit toutes les Énergies  attachées à Rayquaza ex. Cette attaque inflige 40 dégâts multipliés par le nombre d'Énergie  ou  défaussées.",
				de: "Entferne entweder jede {R}-Energie oder jede {L}-Energie, die an Rayquaza ex angelegt ist, und lege sie auf deinen Ablagestapel. Dieser Angriff fügt für jede auf diese Weise abgelegte Energie 40 Schadenspunkte zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88642,
				cardmarket: 275974
			},
		},
		{
			type: "normal",
			stamp: ['chris-fulop'],
			thirdParty: {
				tcgplayer: 477429,
			},
		},
	],

}

export default card
