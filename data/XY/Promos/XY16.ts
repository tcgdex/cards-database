import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Gogoat",
		fr: "Chevroum",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		673,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Recul",
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Forest Press",
				fr: "Pression de la Forêt",
			},
			effect: {
				en: "Flip a coin for each Grass Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Grass attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
