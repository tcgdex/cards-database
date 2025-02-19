import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bruxish"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Second Strike"
		},

		effect: {
			en: "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage."
		},

		damage: "10+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.",
	}
}

export default card
