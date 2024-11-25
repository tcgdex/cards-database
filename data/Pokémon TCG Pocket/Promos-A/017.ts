import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Mankey"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Diamond",
	category: "Pokemon",
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Reckless Charge"
		},

		cost: ["Fighting"],
		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}]
}

export default card