import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		221,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
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
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gathering Footsteps",
				fr: "Collecte d'Empreintes",
			},
			effect: {
				en: "This attack does 10 more damage for each Colorless in the Retreat Cost of your Swinub, Piloswine, and Mamoswine.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite de votre Marcacrin, Cochignon et Mammochon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
