import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Brasegali"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Combusken",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de feu"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double pied"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de faces."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277415
	}
}

export default card
