import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [325],
	set: Set,

	name: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 50,

	types: [
		"Psychic"
	],

	attacks: [{
		cost: [
			"Psychic",
		],
		name: {
			en: "Knock Away",
			fr: "Asticotage",
			de: "Zurückschlagen"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
		},
		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277191,
				tcgplayer: 89475
			}
		},
	],

}

export default card
