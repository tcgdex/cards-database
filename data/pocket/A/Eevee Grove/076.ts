import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sylveon",
		'fr-fr': "Nymphali"
	},

	illustrator: "saino misaki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [700],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	description: {
		'en-us': "This Pokémon uses its ribbonlike feelers to send\na soothing aura into its opponents, erasing\ntheir hostility.",
		'fr-fr': "Ses antennes en forme de ruban émettent des ondes apaisantes en direction de ses adversaires et neutralisent toute hostilité."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Evoharmony",
			'fr-fr': "Harmonie Évolutive"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"],

		effect: {
			'en-us': "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card