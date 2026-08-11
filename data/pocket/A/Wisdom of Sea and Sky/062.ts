import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [580],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "When attacked, it uses its feathers to splash water,\nescaping under cover of the spray.",
		'fr-fr': "Quand on l'attaque, il s'ébroue et fait jaillir de la vapeur d'eau de tout son corps. Il se cache dedans pour s'enfuir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card