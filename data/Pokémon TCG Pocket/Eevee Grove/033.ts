import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon",
		fr: "Nymphali"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "This Pokémon uses its ribbonlike feelers to send\na soothing aura into its opponents, erasing\ntheir hostility.",
		fr: "Ses antennes en forme de ruban émettent des ondes apaisantes en direction de ses adversaires et neutralisent toute hostilité."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Evoharmony",
			fr: "Harmonie Évolutive"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack does 30 more damage for each Evolution Pokémon on your Bench.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon Évolutif sur votre Banc."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card