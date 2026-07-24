import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Combusken",
		fr: "Énergie Plante",
		es: "Energía Planta",
		it: "Energia Erba",
		pt: "Energia de Planta",
		de: "Pflanzen-Energie"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	energyType: "Normal",

	hp: 70,
	weaknesses: [
		{
			type: "Water",
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare"
			},
			damage: 20
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads."
			},
			damage: "40x"
		},
	],
	stage: "Stage1",
	types: [
		"Fire"
	],
	dexId: [256],
	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84403
			}
		},
	],

}

export default card