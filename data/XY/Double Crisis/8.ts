import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Muk",
		fr: "Grotadmorv de la Team Aqua",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Team Aqua's Grimer",
		fr: "Tadmorv de la Team Aqua",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sludge Festival",
				fr: "Festival de Boue",
			},
			effect: {
				en: "The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is Colorless more.",
				fr: "Le Coût de Retraite de chaque Pokémon en jeu (à part les Pokémon de la Team Aqua) est augmenté de Colorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Tarabustage",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
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
