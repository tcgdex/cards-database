import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	description: {
		en: "Spinning minigears are rotated at high speed and repeatedly fired away. It is dangerous if the gears don’t return."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Metal Sound"
		},

		effect: {
			en: "The Defending Pokémon is now Confused."
		}
	}, {
		name: {
			en: "Guard Press"
		},

		damage: 60,

		effect: {
			en: "During your opponent’s next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance)."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Klang"
	},

	rarity: "None",
	hp: 80,
	types: ["Metal"]
}

export default card