import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Macho Revenge",
				fr: "Revanche Macho"
			},
			effect: {
				en: "This attack does 20 damage for each Fighting Pokémon in your discard pile.",
				fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon Fighting dans votre pile de défausse."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dynamite Punch",
				fr: "Poing Dynamite"
			},
			effect: {
				en: "This Pokémon also does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 50 dégâts."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
