import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor"
	},

	illustrator: "Minahamu",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia"
	},

	description: {
		en: "When Staravia evolve into Staraptor, they leave<br />the flock to live alone. They have sturdy wings."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Brave Bird"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card