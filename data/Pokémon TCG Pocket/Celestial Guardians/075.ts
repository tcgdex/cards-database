import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Banette"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Shuppet"
	},

	description: {
		en: "This Pokémon developed from an abandoned doll that amassed a grudge. It is seen in dark alleys."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Night Bind"
		},

		damage: 30,
		cost: ["Psychic"],

		effect: {
			en: "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card