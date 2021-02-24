import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fluffy",
				fr: "Boule de Poils",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from the attacks of your opponent's non-Fire Pokémon (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques des Pokémon non Fire de votre adversaire (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe Transversale",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
