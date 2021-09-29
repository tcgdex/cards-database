import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pheromone Stamina",
				fr: "Endurance aux phéromones",
			},
			effect: {
				en: "Nidoking gets +20 HP for each Nidoqueen you have in play.",
				fr: "Nidoking reçoit +20 PV pour chacun de vos Nidoqueen en jeu.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venomous Horn",
				fr: "Corne venimeuse",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "Its tail is thick and powerful. If it binds an enemy, it can render the victim helpless quite easily."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
