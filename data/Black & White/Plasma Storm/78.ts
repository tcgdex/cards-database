import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dual Armor",
				fr: "Double Armure",
			},
			effect: {
				en: "If this Pokémon has any { Metal } Energy attached to it, this Pokémon's type is both { Fighting } and { Metal }.",
				fr: "Si de l'Énergie Metal est attachée à ce Pokémon, le type de ce Pokémon est Fighting et Metal.",
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
				en: "Hurricane Kick",
				fr: "Pied Ouragan",
			},
			effect: {
				en: "Does 30 more damage for each Prize card your opponent has taken.",
				fr: "Inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
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

	retreat: 2,



}

export default card
