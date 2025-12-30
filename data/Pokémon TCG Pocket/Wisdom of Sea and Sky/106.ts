import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Barbaracle",
		fr: "Golgopathe"
	},

	illustrator: "Nurikabe",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [689],
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Binacle"
	},

	description: {
		en: "Seven Binacle come together to form one\nBarbaracle. The Binacle that serves as the head\ngives orders to those serving as the limbs.",
		fr: "Sept Opermine s'assemblent pour former un Golgopathe. La tête commande les autres membres."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dynamic Chop",
			fr: "Coupe Dynamique"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card