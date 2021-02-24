import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		563,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Durable Body",
				fr: "Corps Solide",
			},
			effect: {
				en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. mais il ne lui reste que 10 PV.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
