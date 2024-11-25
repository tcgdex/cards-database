import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Three Diamond",
	category: "Pokemon",
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Water Shuriken"
		},

		effect: {
			en: "Once during your turn, you may do 20 damage to 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Mist Slash"
		},

		cost: ["Water", "Colorless"],
		damage: 60
	}]
}

export default card