import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Kabutops ex",
		fr: "Kabutops ex",
		de: "Kabutops-ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [141],

	hp: 150,

	stage: "Stage2",
	types: [
		"Water"
	],

	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto",
		de: "Kabuto"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hydrocutter",
				fr: "Hydro-lame",
				de: "Hydroklinge"
			},
			effect: {
				en: "Flip a number of coins equal to the amount of Energy attached to Kabutops ex. This attack does 40 damage times the number of heads. You can't flip more than 3 coins in this way.",
				fr: "Lancez autant de pièces qu'il y a de cartes Énergie attachées à Kabutops ex. Cette attaque inflige 40 dégâts multipliés par le nombre de face. Vous ne pouvez pas lancer plus de trois pièces.",
				de: "Wirf so viele Münzen, wie Energie an Kabutops ex angelegt ist. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu. Du kannst auf diese Weise nicht mehr als 3 Münzen werfen."
			},
			damage: "40×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante",
				de: "Spiralsauger"
			},
			effect: {
				en: "Remove 2 damage counter from Kabutops ex (remove 1 if there is only 1).",
				fr: "Retirez à Kabutops deux marqueurs de dégât (ou un s'il n'y en a qu'un).",
				de: "Entferne 2 Schadensmarken von Kabutops ex (entferne 1, falls Kabutops ex nur 1 hat)."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86402,
				cardmarket: 275874
			}
		},
	]
}

export default card
