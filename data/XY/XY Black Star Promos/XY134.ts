import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Empoleon BREAK",
		fr: "Pingoléon TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 170,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Empoleon",
		fr: "Pingoléon"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Emperor's Command",
				fr: "Ordre de l'Empereur"
			},
			effect: {
				en: "This attack does 30 damage times the number of Pokémon your opponent has in play.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre de Pokémon que votre adversaire a en jeu."
			},
			damage: 30,

		},
	],

	thirdParty: {
		cardmarket: 289823
	}
}

export default card
