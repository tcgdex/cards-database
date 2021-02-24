import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Nidoking BREAK",
		fr: "Nidoking TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		34,
	],
	hp: 180,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidoking",
		fr: "Nidoking",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Toxic Drill",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Perce Toxique",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			},
			damage: 120,

		},
	],






}

export default card
