import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Ninetales ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Alolan Vulpix"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Binding Snow"
		},

		damage: 80,
		cost: ["Water", "Water"],

		effect: {
			en: "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card