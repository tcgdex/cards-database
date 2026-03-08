import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-Éclair",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Ring",
				fr: "Anneau Électrique"
			},
			effect: {
				en: "If Hoopa is on your Bench, this attack does 30 more damage.",
				fr: "Si Hoopa est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289809
	}
}

export default card
