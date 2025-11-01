import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Skwovet",
		fr: "Rongourmand"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It stores berries in its cheeks. When there are no\nberries to be found, Skwovet will stuff pebbles\ninto its cheeks to stave off its cravings.",
		fr: "Il emmagasine des Baies dans ses joues. Lorsqu'il n'en a plus, il essaie de compenser en accumulant des cailloux à la place."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
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