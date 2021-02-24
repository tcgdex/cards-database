import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		471,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Freeze Zone",
				fr: "Zone de Gel",
			},
			effect: {
				en: "The Retreat Cost of each of your Team Plasma Pokémon in play is ColorlessColorless less.",
				fr: "Le coût de Retraite de chacun de vos Pokémon de la Team Plasma en jeu est diminué de ColorlessColorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
