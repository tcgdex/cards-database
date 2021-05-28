import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gligar",
		fr: "Scorplane",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		207,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Free Flight",
				fr: "Vol Gratuit",
			},
			effect: {
				en: "If this Pokémon has no Energy attached to it, it has no Retreat Cost.",
				fr: "Si aucune Énergie n’est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shinobi Strike",
				fr: "Frappe Shinobi",
			},
			effect: {
				en: "If you played Janine from your hand during this turn, this attack does 90 more damage.",
				fr: "Si vous avez joué Jeannine de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
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
