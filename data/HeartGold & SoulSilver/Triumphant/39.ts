import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		370,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rendezvous Draw",
				fr: "Pioche commune",
			},
			effect: {
				en: "Each player draws and reveals the top card of his or her deck.",
				fr: "Chaque joueur pioche et dévoile la carte du dessus de son deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Distorted Wave",
				fr: "Vague tordue",
			},
			effect: {
				en: "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
				fr: "Avant d’infliger des dégâts, retirez un marqueur de dégât au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
