import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Bellsprout",
		fr: "Chétiflor"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [69],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Even though its body is extremely skinny, it is\nblindingly fast when catching its prey.",
		fr: "Même si son corps est très frêle, ce Pokémon\\nest extrêmement rapide quand il attaque ses adversaires."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card