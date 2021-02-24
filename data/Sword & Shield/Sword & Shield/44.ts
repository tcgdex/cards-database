import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Kingler",
		fr: "Krabboss",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		99,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Heavy Pincers",
				fr: "Pinces Lourdes",
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Rend",
				fr: "Déchirure",
			},
			effect: {
				en: "If your opponent’s Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: "90+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
