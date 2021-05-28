import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Kraknoix",
		en: "Trapinch"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Vibration Terrestre",
			en: "Land’s Pulse"
		},

		effect: {
			fr: "Si un Stade est en jeu, cette attaque inflige 10 dégâts supplémentaires.",
			en: "If a Stadium is in play, this attack does 10 more damage."
		},

		damage: "10+",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card