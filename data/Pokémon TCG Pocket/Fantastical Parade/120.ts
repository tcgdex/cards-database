import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Aegislash"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		en: "Doublade"
	},

	description: {
		en: "Its potent spectral powers allow it to manipulate\nothers. It once used its powers to force people\nand Pokémon to build a kingdom to its liking."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Superb Shield"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Metal"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −80 damage from attacks from your opponent's Pokémon ex."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card