import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Illumise",
		fr: "Lumivole",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		314,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux parfum",
			},
			effect: {
				en: "Remove 3 damage counters from 1 of your Pokémon.",
				fr: "Retirez 3 marqueurs de dégât à l'un de vos Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vulcan Beat",
				fr: "Vulcanatak",
			},
			effect: {
				en: "Flip a coin for each Volbeat you have in play. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chacun de vos Muciole en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
