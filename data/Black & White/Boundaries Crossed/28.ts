import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
		es: "Darmanitan",
		it: "Darmanitan",
		pt: "Darmanitan",
		de: "Flampivian"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulade Continue",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Counterpunch",
				fr: "Riposte Enragée",
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
				fr: "Si ce Pokémon a des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280615
	}
}

export default card
