import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Bagon",
		fr: "Énergie Plante",
		es: "Energía Planta",
		it: "Energia Erba",
		pt: "Energia de Planta",
		de: "Pflanzen-Energie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	energyType: "Normal",

	hp: 40,
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt"
			},
			damage: 10
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare"
			},
			damage: 20
		},
	],
	stage: "Basic",
	types: [
		"Colorless"
	],
	dexId: [371],
	retreat: 1,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83694
			}
		},
	],

}

export default card