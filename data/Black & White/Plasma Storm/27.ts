import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		it: "Piloswine",
		pt: "Piloswine",
		de: "Keifel"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
				fr: "Laser Glace",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quintuple Headbutt",
				fr: "Quintuple Coup d'Boule",
			},
			effect: {
				en: "Flip 5 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 5 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280767
	}
}

export default card
