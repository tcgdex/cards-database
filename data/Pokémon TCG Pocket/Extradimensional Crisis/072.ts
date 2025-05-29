import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Blacephalon"
	},

	illustrator: "akagi",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		en: "It slithers toward people. Then, without warning, it triggers the\nexplosion of its own head. It's apparently one kind of Ultra Beast."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat Punk"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 70 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card