import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon"
	},

	illustrator: "Ryota Murayama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "When exposed to the moon's aura, the rings on its\nbody glow faintly and it gains a mysterious power."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dark Binding"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card