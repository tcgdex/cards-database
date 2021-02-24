import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sandile",
		fr: "Mascaïman",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		551,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Intimidating Fang",
				fr: "Croc Intimidant",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
