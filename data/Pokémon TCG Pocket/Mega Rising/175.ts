import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Corviknight"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		en: "Corvisquire"
	},

	description: {
		en: "Although its wings have partly turned to steel and\nbecome heavy as a result, this Pokémon flies\nthrough the skies with ease."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Iron Wings"
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			en: "Discard 2 {M} Energy from this Pokémon. During your opponent's next turn, this Pokémon takes −50 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card