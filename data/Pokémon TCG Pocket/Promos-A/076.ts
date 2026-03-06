import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Blacephalon",
		es: "Blacephalon"
	},

	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",

	dexId: [806],
	hp: 100,
	types: ["Fire"],

	description: {
		en: "It slithers toward people. Then, without warning, it triggers the\nexplosion of its own head. It's apparently one kind of Ultra Beast.",
		es: "Parece ser uno de los temibles Ultraentes. Se acerca a la gente\ncontoneándose y hace explotar su propia cabeza súbitamente",

	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat Punk",
			es: "Beat Punk"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 70 damage to itself.",
			es: "Este Pokémon también se hace 70 puntos de daño a si mismo"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol9"]
}

export default card