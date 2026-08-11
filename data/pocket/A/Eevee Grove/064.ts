import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [819],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "It stores berries in its cheeks. When there are no\nberries to be found, Skwovet will stuff pebbles\ninto its cheeks to stave off its cravings.",
		'fr-fr': "Il emmagasine des Baies dans ses joues. Lorsqu'il n'en a plus, il essaie de compenser en accumulant des cailloux à la place."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card