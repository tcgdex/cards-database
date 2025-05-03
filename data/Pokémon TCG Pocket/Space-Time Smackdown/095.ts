import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gallade ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kirlia"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Energized Blade"
		},

		damage: "70+",
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card
