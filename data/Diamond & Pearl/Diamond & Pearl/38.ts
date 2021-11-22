import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Steelix",
		fr: "Steelix",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Onix",
		fr: "Onix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Slash",
				fr: "Tranche métallique",
			},
			effect: {
				en: "Steelix can't attack during your next turn.",
				fr: "Steelix ne peut pas attaquer lors de votre prochain tour.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		fr: "Grâce à la température élevée et la haute pression souterraines, son corps est plus dur que le métal."
	}
}

export default card
