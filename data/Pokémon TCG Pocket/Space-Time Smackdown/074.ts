import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Drifblim"
	},

	illustrator: "Miki Tanaka",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drifloon"
	},

	description: {
		en: "Some say this Pokémon is a collection of souls burdened with regrets, silently drifting through the dusk."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Balloon Strike"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
