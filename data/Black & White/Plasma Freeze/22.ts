import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Laid-Back",
				fr: "Tranquillou",
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
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
				en: "Mud Gun",
				fr: "Giclée de Boue",
			},
			effect: {
				en: "If this Pokémon has any Fighting Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l'Énergie Fighting est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
