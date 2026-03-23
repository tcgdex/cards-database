import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018 (FR)"

const card: Card = {
	name: {
		fr: "Fantominus",
	},
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [92],
	hp: 50,
	types: ["Psychic"],

	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Résonance Métallique",
			},
			effect: {
				fr: "Défaussez toute l'Énergie spéciale de chaque Pokémon.",
			},
		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Aéropique",
			},
			damage: "60+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
		},
	],
}

export default card
