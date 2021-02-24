import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Dragalge",
		fr: "Kravarech",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		691,
	],
	hp: 110,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Severe Poison",
				fr: "Poison Violent",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
			},

		},
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
			},
			effect: {
				en: "Discard the top card of your deck.",
				fr: "Défaussez la carte du dessus de votre deck.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
