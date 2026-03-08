import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Meditite",
		fr: "Meditikka",
		de: "Meditie"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		307,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Meditite",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Punch",
				fr: "Koud'poing",
				de: "Punch"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Meditate",
				fr: "Yoga",
				de: "Meditate"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur le Pokémon Défenseur.",
				de: "Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon."
			},
			damage: "10+",

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
		tcgplayer: 87278,
		cardmarket: 275914
	}
}

export default card
