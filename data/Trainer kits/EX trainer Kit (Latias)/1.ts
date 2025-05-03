import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [371],
	set: Set,

	name: {
		en: "Bagon"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 40,

	types: [
		"Colorless",
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Headbutt"
		},
		damage: 10
	}, {
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			en: "Flare"
		},
		damage: 20
	}],

	retreat: 1,
}

export default card
