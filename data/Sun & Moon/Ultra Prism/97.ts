import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Griknot",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		443,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rock Hiding",
				fr: "Cachette Roche",
			},
			effect: {
				en: "If this Pokémon has any Fighting Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie Fighting est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
