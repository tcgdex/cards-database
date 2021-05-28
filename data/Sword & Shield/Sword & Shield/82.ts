import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Rapidash",
		fr: "Galopa de Galar",
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Galarian Ponyta",
		fr: "Ponyta de Galar",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Pastel Veil",
				fr: "Voile Pastel",
			},
			effect: {
				en: "Your Pokémon recover from all Special Conditions and can't be affected by any Special Conditions.",
				fr: "Vos Pokémon guérissent de tous les États Spéciaux et ne peuvent être affectés par aucun État Spécial.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
