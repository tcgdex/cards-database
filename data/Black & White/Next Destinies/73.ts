import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Scraggy",
		fr: "Baggiguane",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		559,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shed Skin",
				fr: "Mue",
			},
			effect: {
				en: "Heal 40 damage from this Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Lunge",
				fr: "Coup Rapide",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
