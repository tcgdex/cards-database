import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
	},
	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		544,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Point",
				fr: "Point Poison",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Poisoned.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Empoisonné.",
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
				en: "Spinning Attack",
				fr: "Attaque Tournante",
			},

			damage: 50,

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
