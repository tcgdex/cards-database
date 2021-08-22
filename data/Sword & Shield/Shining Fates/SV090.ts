import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charibari",
		en: "Cufant",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	illustrator: "sowsow",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	attacks: [{
		name: {
			fr: "Force",
			en: "Strength",
			es: "Fuerza",
			it: "Forza",
			pt: "Força",
			de: "Stärke"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "It digs up the ground with its trunk. It’s also very strong, being able to carry loads of over five tons without any problem at all."
	}
}

export default card