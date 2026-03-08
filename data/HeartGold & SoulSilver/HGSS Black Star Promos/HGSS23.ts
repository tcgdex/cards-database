import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2"
	},
	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		233,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon",
		fr: "Porygon"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shortcut",
				fr: "Raccourci"
			},
			effect: {
				en: "The Retreat Cost for each Porygon, Porygon2, and Porygon-Z you have in play is Colorless less.",
				fr: "Le Coût de retraite de chacun de vos Porygon, Porygon2 et Porygon-Z en jeu est diminué de ."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente"
			},
			effect: {
				en: "Porygon2 does 10 damage to itself.",
				fr: "Porygon2 s'inflige 10 dégâts."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
