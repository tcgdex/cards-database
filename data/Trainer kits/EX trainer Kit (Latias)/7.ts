import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [255],
	set: Set,

	name: {
		en: "Torchic",
		fr: "Poussifeu",
		de: "Flemmli"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Fire"
	],

	attacks: [{
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			en: "Firebreathing",
			fr: "Souffle-feu",
			de: "Feuerhauch"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
			de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
		},
		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Water",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275775,
				tcgplayer: 89954
			}
		},
	],

}

export default card
