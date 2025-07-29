import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280010
	}
}

export default card
