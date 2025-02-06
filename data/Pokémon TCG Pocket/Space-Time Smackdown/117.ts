import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong"
	},

	illustrator: "Yuka Morii",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor"
	},

	description: {
		en: "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Guard Press"
		},

		damage: 60,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card
