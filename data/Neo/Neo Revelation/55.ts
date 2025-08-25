import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Snubbull",
		fr: "Snubbull",
		de: "Snubbull"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		209,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Headbutt",
				fr: "Coup d'boule rageur",
				de: "Raging Headbutt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 damage times the number of damage counters on Snubbull. If tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Snubbull. Si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 10damage times the number of damage counters on Snubbull. If tails, this attack does 10 damage."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il est d'humeur joueuse et agitée. Bon nombre de personnes aiment batifoler avec lui parce qu'il est affectueux."
	},

	thirdParty: {
		cardmarket: 274641,
		tcgplayer: 89411
	}
}

export default card
