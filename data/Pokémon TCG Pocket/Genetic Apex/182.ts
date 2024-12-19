import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Melmetal"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hard Coat"
		},

		effect: {
			en: "This Pokémon takes -20 damage from attacks."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		name: {
			en: "Heavy Impact"
		},

		damage: "120"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	}
}

export default card
