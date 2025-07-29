import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		447,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Light Punch",
				fr: "Poing léger",
				de: "Light Punch"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steady Punch",
				fr: "Poing énergétique",
				de: "Steady Punch"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278512
	}
}

export default card
