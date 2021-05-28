import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Barraskewda",
		fr: "Hastacuda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Arrokuda",
		fr: "Embrochet"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spiral Jet",
				fr: "Jet en Spirale"
			},
			effect: {
				en: "Discard 2 Water Energy cards from your hand. If you don't, this attack does nothing.",
				fr: "Défaussez 2 cartes Énergie Water de votre main. Sinon, cette attaque ne fait rien."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Water"],
	regulationMark: "D"
}

export default card
