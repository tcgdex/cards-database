import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
		es: "Sawk",
		it: "Sawk",
		pt: "Sawk",
		de: "Karadonis"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		539,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Defensive Stance",
				fr: "Posture Défensive",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon. Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
			},
			effect: {
				en: "Does 70 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Inflige 70 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
