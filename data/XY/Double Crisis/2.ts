import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma’s Camerupt",
		fr: "Camérupt de la Team Magma",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Team Magma’s Numel",
		fr: "Chamallot de la Team Magma",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Burning Draft",
				fr: "Souffle Enflammé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fighting or Fire Energy card from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fighting ou Fire de votre pile de défausse à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Ball",
				fr: "Boule de Feu",
			},
			effect: {
				en: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
