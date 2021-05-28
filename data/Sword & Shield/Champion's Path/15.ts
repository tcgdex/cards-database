import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Drednaw VMAX",
		fr: "Torgamord VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Drednaw V",
		fr: "Torgamord-V"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solid Shell",
				fr: "Coquille Dure"
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "G-Max Headbutt",
				fr: "Coup d’Boule G-Max"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 80 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 80 dégâts supplémentaires."
			},
			damage: "160+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
