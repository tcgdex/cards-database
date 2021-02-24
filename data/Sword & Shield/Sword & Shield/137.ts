import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 190,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Cufant",
		fr: "Charibari",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Dig Drain",
				fr: "Trou Épuisant",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Muscular Nose",
				fr: "Nez Musclé",
			},
			effect: {
				en: "If this Pokémon has 8 or more damage counters on it, this attack does nothing.",
				fr: "Si ce Pokémon a au moins 8 marqueurs de dégâts, cette attaque ne fait rien.",
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 4,



}

export default card
