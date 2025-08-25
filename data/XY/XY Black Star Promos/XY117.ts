import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				fr: "Assistance Énergétique",
			},
			effect: {
				en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Victory Ball",
				fr: "Balle Victoire",
			},
			effect: {
				en: "Discard a Fire Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 293002
	}
}

export default card
