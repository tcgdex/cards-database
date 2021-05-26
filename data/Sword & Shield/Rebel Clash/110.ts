import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Falinks V",
		fr: "Hexadron V"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Iron Defense Formation",
				fr: "Escadron Mur de Fer"
			},
			effect: {
				en: "All of your Pokémon that have \"Falinks\" in their name take 20 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Tous vos Pokémon ayant « Hexadron » dans leur nom subissent 20 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact"
			},
			effect: {
				en: "During your next turn, this Pokémon can't attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
			},
			damage: 210,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 160,
	types: ["Fighting"]
}

export default card
