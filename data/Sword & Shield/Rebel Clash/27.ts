import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Odor Sleuth",
				fr: "Flair"
			},
			effect: {
				en: "Flip a coin. If heads, put a card from your discard pile into your hand.",
				fr: "Lancez une pièce. Si c’est face, ajoutez une carte de votre pile de défausse à votre main."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Claws",
				fr: "Griffes Enflammées"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Fire"]
}

export default card
