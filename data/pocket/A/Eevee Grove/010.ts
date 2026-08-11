import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Torkoal",
		fr: "Chartor"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [324],
	hp: 100,
	types: ["Fire"],

	description: {
		en: "It burns coal inside its shell for energy. It blows\nout black soot if it is endangered.",
		fr: "Ce Pokémon brûle du charbon dans sa carapace. Quand on l'attaque, il crache de la fumée noire pour pouvoir s'enfuir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes"
		},

		damage: 70,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard a {R} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {R} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card