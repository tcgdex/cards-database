import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
	},
	illustrator: "Studio Bora Inc.",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		452,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Dangerous Stinger",
				fr: "Dard Redoutable",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
