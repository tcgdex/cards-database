import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Ultra Necrozma",
		fr: "Ultra-Necrozma",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 130,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Shining Burst",
				fr: "Brillance Détonante",
			},
			effect: {
				en: "If the total of both players' remaining Prize cards is 6 or less, discard all Energy from this Pokémon, and this attack does 100 more damage.",
				fr: "S’il reste 6 cartes Récompense ou moins aux deux joueurs réunis, défaussez toute l’Énergie de ce Pokémon et cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
