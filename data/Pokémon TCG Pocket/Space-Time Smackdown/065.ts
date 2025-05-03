import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Togekiss"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Togetic"
	},

	description: {
		en: "These Pokémon are never seen anywhere near conflict or turmoil. In recent times, they've hardly been seen at all."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Overdrive Smash"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "During your next turn, this Pokémon's  attack does +60 damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
