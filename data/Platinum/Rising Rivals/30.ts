import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen Niv. 54",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Maternal Comfort",
				fr: "Réconfort maternel",
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from each of your Pokémon. You can't use more than 1 Maternal Comfort Poké-Body between turns.",
				fr: "N'importe quand entre deux tours, retirez à chacun de vos Pokémon 1 marqueur de dégât. Vous ne pouvez pas utiliser plus d'1 Poké-Body Réconfort maternel entre deux tours.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
			},

			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ruthless Tail",
				fr: "Queue sans pitié",
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each of your opponent's Benched Pokémon.",
				fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
