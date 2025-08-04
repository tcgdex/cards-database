import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Azumarill"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Marill"
	},

	description: {
		en: "Its long ears are superb sensors. It can distinguish\nthe movements of things in water and tell what\nthey are."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thick Fat"
		},

		effect: {
			en: "This Pokémon takes −30 damage from attacks from {R} or {W} Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Tail Smack"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card