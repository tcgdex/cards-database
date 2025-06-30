import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon"
	},

	illustrator: "saino misaki",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "This Pokémon uses its ribbonlike feelers to send\na soothing aura into its opponents, erasing\ntheir hostility."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Evoharmony"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack does 30 more damage for each Evolution Pokémon on your Bench."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card