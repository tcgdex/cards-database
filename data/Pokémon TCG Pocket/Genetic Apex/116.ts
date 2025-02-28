import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kadabra"
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Abra"
	},


	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Super Psy Bolt"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],


	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
	}
}

export default card
