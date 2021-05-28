import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wrack Down",
				fr: "Réduire en Poussière"
			},

			damage: 90,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Storm",
				fr: "Forte Tempête"
			},
			effect: {
				en: "Discard any Stadium in play.",
				fr: "Défaussez tout Stade en jeu."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 180,
	types: ["Water"],
	regulationMark: "D"
}

export default card
