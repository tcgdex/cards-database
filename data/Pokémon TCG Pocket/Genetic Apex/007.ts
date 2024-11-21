import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree"
	},

	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Powder Heal"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Gust"
		},

		damage: "60"
	}],

	retreat: 1,
	rarity: "Three Diamond"
}

export default card