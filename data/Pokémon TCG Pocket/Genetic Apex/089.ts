import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Frogadier"
	},


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
		cost: ["Water", "Colorless"],

		name: {
			en: "Mist Slash"
		},

		damage: "60"
	}],

	retreat: 1,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
