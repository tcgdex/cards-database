import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		783,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fighter's Roar",
				fr: "Rugissement de Combat",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-GX or Pokémon-EX, this Pokémon can evolve during the turn you play it.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou Pokémon-EX, ce Pokémon-ci peut évoluer pendant le tour où il est mis en jeu.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Fightning",
			],
			name: {
				en: "Dragonslice",
				fr: "Draco-Tranche",
			},

			damage: 30,

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
