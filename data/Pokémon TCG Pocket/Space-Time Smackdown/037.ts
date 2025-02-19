import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Prinplup"
	},

	description: {
		en: "It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Aqua Jet"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
