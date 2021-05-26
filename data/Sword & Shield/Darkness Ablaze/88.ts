import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif"
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 180,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect"
	},



	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bedrock Breaker",
				fr: "Brise Fondation"
			},
			effect: {
				en: "Discard a Stadium in play.",
				fr: "Défaussez un Stade en jeu."
			},
			damage: 120,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountain Swing",
				fr: "Frappe Montagneuse"
			},
			effect: {
				en: "Discard the top 5 cards of your deck.",
				fr: "Défaussez les 5 cartes du dessus de votre deck."
			},
			damage: 250,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
