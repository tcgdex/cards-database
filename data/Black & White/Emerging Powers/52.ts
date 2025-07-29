import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Boldore",
		fr: "Géolithe",
		es: "Boldore",
		it: "Boldore",
		pt: "Boldore",
		de: "Sedimantur"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		525,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Crash",
				fr: "Grosse Gamelle",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
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

	thirdParty: {
		cardmarket: 280016
	}
}

export default card
