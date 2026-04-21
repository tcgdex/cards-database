import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune"
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
				fr: "Glaciation"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
