import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 50,
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
				en: "Digicharge",
				fr: "Charge Numérique",
			},
			effect: {
				en: "Flip 3 coins. For each heads, search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Lancez 3 pièces. Pour chaque côté face, cherchez une carte Énergie dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Point",
				fr: "Point-Pointu",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
