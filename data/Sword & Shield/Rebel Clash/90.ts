import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Drakloak",
		fr: "Dispareptil"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Dreepy",
		fr: "Fantyrm"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Summon",
				fr: "Citation"
			},
			effect: {
				en: "Search your deck for a Dreepy and put it onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez un Fantyrm dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Bite",
				fr: "Morsure"
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
