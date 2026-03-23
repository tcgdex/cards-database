import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		fr: "Morpeko V-UNION",
		de: "Morpeko V-UNION",
		es: "Morpeko V-UNIÓN",
		pt: "Morpeko V-UNIÃO",
		it: "Morpeko V UNIONE",
		en: "Morpeko V-UNION"
	},

	rarity: "Black Star Promo",
	category: "Pokemon",
	suffix: "V",
	hp: 310,
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Gain UNION",
			},
			effect: {
				fr: "Attachez jusqu'à 2 cartes Énergie Électrique de votre pile de défausse à ce Pokémon.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Buffet à Volonté",
			},
			effect: {
				fr: "Piochez des cartes jusqu'å en avoir 10 en main.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Roue Éclatante",
			},
			damage: "100×",
			effect: {
				fr: "Défaussez toute l'Énergie de ce Pokémon. Cette attaque inflige 100 dégâts pour chaque carte défaussée de cette façon.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Boule de Foudre",
			},
			damage: "160",
		},
	],

	retreat: 0,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 651353
	}
}

export default card