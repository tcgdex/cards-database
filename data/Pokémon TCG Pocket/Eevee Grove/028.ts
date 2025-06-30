import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon"
	},

	illustrator: "Ryota Murayama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "The tip of its forked tail quivers when it is\npredicting its opponent's next move."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Energy Crush"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			en: "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card