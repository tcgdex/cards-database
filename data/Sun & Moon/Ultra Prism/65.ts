import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Rampardos",
		fr: "Charkos",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		409,
	],
	hp: 150,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Cranidos",
		fr: "Kranidos",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Clean Hit",
				fr: "Coup Net",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Wild Crash",
				fr: "Collision Agitée",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
