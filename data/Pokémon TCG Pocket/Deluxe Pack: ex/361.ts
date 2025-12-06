import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmeleon"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 60,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Crimson Storm"
		},

		damage: 200,
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card