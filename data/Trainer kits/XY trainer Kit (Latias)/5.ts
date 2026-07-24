import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Numel",
		fr: "Énergie Plante",
		es: "Energía Planta",
		it: "Energia Erba",
		pt: "Energia de Planta",
		de: "Pflanzen-Energie"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	energyType: "Normal",

	hp: 40,
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
				en: "Firebreathing"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+"
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle"
			},
			damage: 20
		},
	],
	stage: "Basic",
	types: [
		"Fire"
	],
	dexId: [322],
	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87808
			}
		},
	],

}

export default card