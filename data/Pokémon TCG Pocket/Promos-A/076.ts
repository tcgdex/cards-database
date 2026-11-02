import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Blacephalon",
		es: "Blacephalon",
		de: "Kopplosio"
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
		de: "Dieses Wesen ist vermutlich eine Ultrabestie. Es nähert sich Menschen tänzelnd, nur um dann plötzlich seinen Kopf explodieren zu lassen."

	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat Punk",
			es: "Beat Punk",
			de: "Beat Punk"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 70 damage to itself.",
			es: "Este Pokémon también se hace 70 puntos de daño a si mismo",
			de: "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu."
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