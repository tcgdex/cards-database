import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	// TODO: incomplete data (Pokepedia redlink)
	name: {
		en: "Mega Charizard Y ex",
		fr: "Méga-Dracaufeu Y-ex"
	},

	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [6],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Explosion Y",
			},
			effect: {
				fr: "Défaussez 3 Énergies de ce Pokémon. Cette attaque inflige 280 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
		},
	],

	regulationMark: "I"
}

export default card
