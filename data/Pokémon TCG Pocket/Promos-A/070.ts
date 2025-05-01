import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Ninetales"
	},

	illustrator: "tono",
	rarity: "One Star",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Alolan Vulpix"
	},

	description: {
		en: "A deity resides in the snowy mountains where this Pokémon lives. In ancient times, it was worshiped as that deity's incarnation."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Blizzard"
		},

		damage: 60,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "This attack also does 20 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card