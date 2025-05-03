import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc"
	},

	illustrator: "5ban Graphics",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff"
	},

	description: {
		en: "This Pokémon uses its rocky mane to slash any who approach. It will even disobey its Trainer if it dislikes the orders it was given."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Blood Fang"
		},

		damage: "50+",
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "If your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
