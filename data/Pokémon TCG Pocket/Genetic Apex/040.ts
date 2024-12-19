import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Heat Tackle"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		},

		damage: "100"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		es: "Growlithe",
		it: "Growlithe",
		pt: "Growlithe",
		de: "Fukano"
	}
}

export default card
