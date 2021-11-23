import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		175,
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
				en: "Minor Errand-Running",
				fr: "Rendez-vous mineur"
			},
			effect: {
				en: "Flip 2 coins. For each heads, search your deck for a basic Energy card. Show those cards to your opponent and then put them into your hand. Shuffle your deck afterward.",
				fr: "Lancez 2 pièces. Pour chaque face, cherchez dans votre deck une carte Énergie de base. Montrez ces cartes à votre adversaire avant de les ajouter à votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'face"
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
