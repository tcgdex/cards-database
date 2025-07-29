import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Seviper",
		fr: "Séviper de la Team Aqua",
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		336,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Venomous Fang",
				fr: "Croc-Poison",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venom Tail",
				fr: "Queue Venimeuse",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, discard an Energy attached to that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, défaussez une Énergie lui étant attachée.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282520
	}
}

export default card
