import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Démanta",
	},
	illustrator: "Jumpei Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		226,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Reserve",
				fr: "Réserve d’Eau",
			},
			effect: {
				en: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 3 cartes Énergie Eau, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
