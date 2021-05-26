import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Alolan Persian",
		fr: "Persian d’Alola",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Taunt",
				fr: "Provoc",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Claw Rend",
				fr: "Déchirure",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
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
