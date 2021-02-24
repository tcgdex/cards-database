import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Kartana",
		fr: "Katagami",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		798,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Divine Paper",
				fr: "Papier Sublime",
			},
			effect: {
				en: "If your opponent has exactly 6 Prize cards remaining, this attack does 90 more damage.",
				fr: "S’il reste exactement 6 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
