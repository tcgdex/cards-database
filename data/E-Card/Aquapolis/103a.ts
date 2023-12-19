import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		de: "Porygon"
	},
	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Data Sort",
				fr: "Tri de données",
				de: "Datensortierer"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Trainer card in your discard pile, show it to your opponent, and shuffle it into your deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte Dresseur de votre pile de défausse, montrez-la à votre adversaire, et mélangez-la ensuite dans votre deck.",
				de: "Wirf eine Münze. Nimm bei \"Kopf\" eine Trainerkarte aus deinem Ablagestapel, zeige sie deinem Gegner und mische sie in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Koud'bec",
				de: "Schnabel"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
