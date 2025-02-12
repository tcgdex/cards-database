import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Cloyster"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Shellder"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Shell Armor"
		},

		effect: {
			en: "This Pokémon takes -10 damage from attacks."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Surf"
		},

		damage: "70"
	}],

	retreat: 3,
	rarity: "Two Diamond",
	boosters: [Mewtwo]
}

export default card
