import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sinister Fog",
				fr: "Brouillard Sinistre",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 1 damage counter on each of your opponent’s Benched Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 1 marqueur de dégâts sur chacun des Pokémon de Banc de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Creep Show",
				fr: "Spectacle Perturbant",
			},
			effect: {
				en: "If your opponent’s Active Pokémon has 3 or more damage counters on it, that Pokémon is Knocked Out.",
				fr: "Si le Pokémon Actif de votre adversaire a 3 marqueurs de dégâts ou plus, ce dernier est mis K.O.",
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
