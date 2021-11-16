import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Baltoy",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Pull",
				fr: "Attraction primaire"
			},
			effect: {
				en: "As long as Claydol is your Active Pokémon, each player's Evolved Pokémon pays Colorless more Energy to use its attacks.\"",
				fr: "Tant que Kaorine est votre Pokémon Actif, le Pokémon Évolué de chaque joueur paye 1 Énergie  supplémentaire pour utiliser ses attaques."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Muddy Eye",
				fr: "Oeil boueux"
			},
			effect: {
				en: "Does 10 damage times the number of basic Energy cards attached to Claydol and the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie de base attachées à Kaorine et au Pokémon Défenseur."
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
