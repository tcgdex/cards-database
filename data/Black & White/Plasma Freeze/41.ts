import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Nidorina",
		fr: "Nidorina",
		es: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
		de: "Nidorina"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double Pied",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280919
	}
}

export default card
