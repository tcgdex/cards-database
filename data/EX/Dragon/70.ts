import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		322,
	],
	hp: 50,
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
				en: "Rollout",
				fr: "Roulade"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Kindle",
				fr: "Enflammer"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Numel and then discard an Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie  attachée à Chamallot puis une carte Énergie attachée au Pokémon Défenseur."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
