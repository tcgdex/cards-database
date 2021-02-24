import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Palossand",
		fr: "Trépassable",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		770,
	],
	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Sandygast",
		fr: "Bacabouh",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wall of Sand",
				fr: "Muraille de Sable",
			},
			effect: {
				en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Absorb Vitality",
				fr: "Absorb Vitalité",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
