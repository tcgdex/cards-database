import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Scolipede",
		fr: "Brutapode",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		545,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
	},
	stage: "Stage2",

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
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
			},
			effect: {
				en: "If the Defending Pokémon is Poisoned, this attack does 40 more damage.",
				fr: "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
