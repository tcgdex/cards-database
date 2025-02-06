import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",
	evolveFrom: {
		en: "Charmeleon"
	},


	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin"
		},

		effect: {
			en: "Discard 2 R Energy from this Pokémon."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
	}
}

export default card
