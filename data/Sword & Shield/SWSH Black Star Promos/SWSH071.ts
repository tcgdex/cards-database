import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny",
		fr: "Flambino"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Me First",
			fr: "Moi d’Abord"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant"
		},

		damage: 20,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card