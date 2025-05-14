import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bellsprout",
		fr: "Chétiflor"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Even though its body is extremely skinny, it is blindingly fast when catching its prey.",
		fr: "Même si son coprs est très frêle, ce Pokémon est extrêmement rapide quand il attaque ses adversaires."
	}
}

export default card
