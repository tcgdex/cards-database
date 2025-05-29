import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pheromosa"
	},

	illustrator: "matazo",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "A life-form that lives in another world, its body\nis thin and supple, but it also possesses\ngreat power."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Jump Blues"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card