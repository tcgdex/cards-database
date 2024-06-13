import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [770],
	set: Set,

	name: {
		en: "Palossand",
		fr: "Trépassable",
		es: "Palossand",
		it: "Palossand",
		pt: "Palossand",
		de: "Colossand"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
		es: "Sandygast",
		it: "Sandygast",
		pt: "Sandygast",
		de: "Sankabuh"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		en: "Once it has whipped up a sandstorm to halt its opponents in their tracks, this terrifying Pokémon snatches away their vitality."
	},

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Spooky Sand"
		},

		damage: 120
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			en: "Oppressing Sandstorm"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card