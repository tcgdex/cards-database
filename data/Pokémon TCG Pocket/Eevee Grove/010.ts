import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Torkoal"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		en: "It burns coal inside its shell for energy. It blows\nout black soot if it is endangered."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flamethrower"
		},

		damage: 70,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard a {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card