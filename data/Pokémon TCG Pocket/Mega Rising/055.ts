import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ludicolo"
	},

	illustrator: "sowsow",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Lombre"
	},

	description: {
		en: "If it hears festive music, it begins moving in\nrhythm in order to amplify its power."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Rhythmic Steps"
		},

		damage: 60,
		cost: ["Water", "Water"],

		effect: {
			en: "If you have exactly 1, 3, or 5 cards in your hand, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card