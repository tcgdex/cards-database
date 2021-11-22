import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		48,
	],
	hp: 50,
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
				en: "Psycho Waves",
				fr: "Psycho-vagues"
			},
			effect: {
				en: "Discard an Energy card attached to Venonat. The Defending Pokémon is now Confused.",
				fr: "Défaussez une carte Énergie attachée à Mimitoss. Le Pokémon Défenseur est maintenant Confus."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
