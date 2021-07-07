import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Adaptive Evolution",
				fr: "Évolution Adaptative",
			},
			effect: {
				en: "This Pokémon can evolve during your first turn or the turn you play it.",
				fr: "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harden",
				fr: "Armure",
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon would be damaged by an attack, prevent that attack’s damage done to this Pokémon if that damage is 60 or less.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
