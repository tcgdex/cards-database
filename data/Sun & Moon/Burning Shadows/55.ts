import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Boost",
				fr: "Boost de Poison",
			},
			effect: {
				en: "If this Pokémon is Poisoned, this attack does 80 more damage. Then, remove that Special Condition from this Pokémon.",
				fr: "Si ce Pokémon est Empoisonné, cette attaque inflige 80 dégâts supplémentaires. Ensuite, retirez cet État Spécial de ce Pokémon.",
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

	retreat: 2,



}

export default card
