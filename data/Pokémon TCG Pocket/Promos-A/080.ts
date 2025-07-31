import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Stakataka",
		es: "Stakataka"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		en: "It appeared from an Ultra Wormhole. Each one\nappears to be made up of many life-forms\nstacked one on top of each other.",
		es: "Surgió de un Ultraumbral. Parece estar compuesto de varias\n criaturas que se han combinado para formar un solo ser."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Brass Rock",
			es: "Brass Rock"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			es: "Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["vol9"]
}

export default card