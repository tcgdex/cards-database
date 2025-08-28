import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Milotic"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Feebas"
	},

	description: {
		en: "Milotic has provided inspiration to many artists.\nIt has even been referred to as the most\nbeautiful Pokémon of all."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Healing Ripples"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may heal 60 damage from 1 of your {W} Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Aqua Edge"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card