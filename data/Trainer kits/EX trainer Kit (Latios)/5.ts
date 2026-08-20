import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magnéton",
		de: "Magneton"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
		de: "Magnetilo"
	},

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Ram",
			fr: "Collision",
			de: "Ramme"
		},
		damage: 20
	}, {
		cost: [
			"Lightning",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Triple Smash",
			fr: "Triple éclate",
			de: "Dreifachschmetterer"
		},
		effect: {
			en: "Flip 3 coins. This attack does 20 damage plus 20 more damage for each heads.",
			fr: "Lancez trois pièces. Cette attaque inflige 20 dégâts plus 20 dégâts multipliés par le nombre de faces.",
			de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
		},
		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275762,
				tcgplayer: 87103
			}
		},
	],

}

export default card
