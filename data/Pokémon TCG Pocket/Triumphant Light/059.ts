import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor"
	},

	description: {
		en: "In ages past, this Pokémon was revered as a<br />bringer of rain. It was found buried in the ground."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psychic"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card