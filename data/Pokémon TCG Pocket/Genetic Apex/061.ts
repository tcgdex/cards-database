import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwrath"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Poliwhirl"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Mega Punch"
		},

		damage: "80"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Charizard]
}

export default card
