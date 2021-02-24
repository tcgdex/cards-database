import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		37,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Secret Alleyway",
				fr: "Allée Secrète",
			},
			effect: {
				en: "If you have any Fairy Pokémon in play, this Pokémon has no Retreat Cost.",
				fr: "Si vous avez au moins un Pokémon Fairy en jeu, ce Pokémon n’a pas de Coût de Retraite.",
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
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
